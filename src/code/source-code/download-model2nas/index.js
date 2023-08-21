'use strict';
const path = require('path');
const fs = require('fs-extra');
const downloads = require('@serverless-devs/downloads').default;

async function downloadChatglm2_6b_int4(region, callback) {
    const nasModelPath = '/mnt/auto/llm/models/chatglm2-6b-int4';
    const modelUrl = `https://serverless-ai-models-${region}.oss-${region}-internal.aliyuncs.com/chatglm2-6b-int4/pytorch_model.bin`;
    const filename = path.basename(modelUrl);
    if (!fs.existsSync(nasModelPath)) {
        fs.ensureDirSync(nasModelPath);
    }
    const modelFile = path.join(nasModelPath, filename);
    if (fs.existsSync(modelFile)) {
        callback(null, 'fiExist');
    } else {
        try {
            await downloads(modelUrl, {
                dest: nasModelPath,
                filename,
                extract: true
            });
            callback(null, 'download chatglm2-6b-int4 success');
        } catch (e) {
            callback(null, e);
        }

    }

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



    const modelFile = path.join(nasModelPath, filename);
    if (fs.existsSync(modelFile)) {
        callback(null, 'fiExist');
    } else {
        try {
            await Promise.all(downloadPrepareList)
            callback(null, 'download qwen success');
        } catch (e) {
            callback(null, e);
        }

    }

}


exports.handler = async (_event, _context, callback) => {
    const region = process.env.region || 'cn-hangzhou';
    const modelName = process.env.modelName;
    if (modelName === 'chatglm2-6b') {
        await downloadChatglm2_6b_int4(region, callback);
    }
    
    if (modelName === 'qwen') {
        await downloadQwen(region, callback);
    }

}
