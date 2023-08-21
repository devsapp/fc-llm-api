'use strict';
const path = require('path');
const fs = require('fs-extra');
const downloads = require('@serverless-devs/downloads').default;

async function downloadChatglm2_6b_int4(region) {
    const nasModelPath = '/mnt/auto/llm/models/chatglm2-6b-int4';
    const modelUrl = `https://serverless-ai-models-${region}.oss-${region}-internal.aliyuncs.com/chatglm2-6b-int4/pytorch_model.bin`;
    const filename = path.basename(modelUrl);
    if (!fs.existsSync(nasModelPath)) {
        fs.ensureDirSync(nasModelPath);
    }
    const modelFile = path.join(nasModelPath, filename);
    console.log(modelFile);
    let result = ''
    if (fs.existsSync(modelFile)) {
        result = 'file already exist'
    } else {
        try {
            await downloads(modelUrl, {
                dest: nasModelPath,
                filename,
                extract: false
            });
            result = 'download chatglm2-6b-int4 success'
            // callback(null, 'download chatglm2-6b-int4 success');
        } catch (e) {
            result = e;
        }

    }
    return result

}


async function downloadQwen(region, callback) {
    const nasModelPath = '/mnt/auto/llm/models/qwen-7b-chat';


    const downloadModelList = [{
        modelUrl: `https://serverless-ai-models-${region}.oss-${region}-internal.aliyuncs.com/Qwen-7B-Chat-new/pytorch_model-00006-of-00008.bin`,
        hasDownload: false
    }, {
        modelUrl: `https://serverless-ai-models-${region}.oss-${region}-internal.aliyuncs.com/Qwen-7B-Chat-new/pytorch_model-00007-of-00008.bin`,
        hasDownload: false
    }, {
        modelUrl: `https://serverless-ai-models-${region}.oss-${region}-internal.aliyuncs.com/Qwen-7B-Chat-new/pytorch_model-00008-of-00008.bin`,
        hasDownload: false
    }]

    if (!fs.existsSync(nasModelPath)) {
        fs.ensureDirSync(nasModelPath);
    }
    let result = ''
    const downloadPrepareList = [];
    downloadModelList.forEach((item) => {
        const filename = path.basename(item.modelUrl);
        const modelFile = path.join(nasModelPath, filename);
        if (fs.existsSync(modelFile)) {
            item.hasDownload = true;
        }
        if (!item.hasDownload) {
            downloadPrepareList.push(new Promise((resolve, reject) => {
                downloads(item.modelUrl, {
                    dest: nasModelPath,
                    filename,
                    extract: false
                }).then(data => {
                    resolve(data)
                }).catch(e => reject(e))
            }))
        }
    })


    try {
        const all = await Promise.all(downloadPrepareList)
        console.log(all)
        result = 'download qwen success'
    } catch (e) {
        result = e;
    }
    return result
}


exports.handler = async (_event, _context, callback) => {
    const region = process.env.region || 'cn-hangzhou';
    const modelName = process.env.modelName;
    let result = '';
    if (modelName === 'chatglm2-6b-int4') {
        result = await downloadChatglm2_6b_int4(region);
    }

    if (modelName === 'qwen-7b-chat') {
        result = await downloadQwen(region);
    }

    callback(null, result)

}
