[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-simple-dalle3.svg)](https://www.npmjs.com/package/node-red-contrib-simple-dalle3)
[![downloads](https://img.shields.io/npm/dt/node-red-contrib-simple-dalle3.svg)](https://www.npmjs.com/package/node-red-contrib-simple-dalle3)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/HaroldPetersInskipp/node-red-contrib-chatgpt/blob/main/LICENSE)

## 概要
OpenAIのDALL·E 3で画像生成を行うノードです。  
payloadに生成したい画像文章を入れると、画像が生成されます。

例) かわいい猫の画像

## インストール

```
npm i node-red-contrib-simple-dalle3
```

or

AdminタブからInstall

## 使い方
### 入力項目

|項目|説明|
|--|--|
|payload|生成したい画像のプロンプトを指定します。|
|OpenAI API Key|OpenAPIのAPIキーを設定します。|
|output|出力形式を指定します。|

### 出力項目

|項目|説明|
|--|--|
|payload|生成した画像が指定した出力形式で返ってきます。|


## LINK

* [NodeRED](https://flows.nodered.org/node/node-red-contrib-simple-dalle3)
* [Libraries.io](https://libraries.io/npm/node-red-contrib-simple-dalle3)
* [npm](https://www.npmjs.com/package/node-red-contrib-simple-dalle3)

## release

* 2023/11/07: 初回リリース（v1.0.0）

