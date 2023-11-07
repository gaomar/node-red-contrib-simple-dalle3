module.exports = (RED) => {
  const OpenAI = require("openai");
  const main = function (config) {
    RED.nodes.createNode(this, config);
    this.Token = config.Token || "";
    this.output = config.output || "url";
    const node = this;

    const openai = new OpenAI({
      apiKey: node.Token,
    });

    node.on("input", async (msg) => {
      node.status({ fill: "green", shape: "dot", text: "処理中..." });
      try {
        const resp = await openai.images.generate({
          model: 'dall-e-3',
          prompt: msg.payload,
          response_format: node.output,
        })
        if (node.output === "url") {
          msg.payload = resp.data[0].url;
        } else {
          msg.payload = resp.data[0].b64_json;
        }
        node.status({});
      } catch (error) {
        if (error.response) {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.response.status}, ${JSON.stringify(
              error.response.data.error.message
            )}`,
          });
          msg.payload = `${error.response.status}, ${JSON.stringify(
            error.response.data.error.message
          )}`;
        } else {
          node.status({
            fill: "red",
            shape: "dot",
            text: `${error.type}, ${error.message}`,
          });
          msg.payload = `${error.type}, ${error.message}`;
        }
      }
      node.send(msg);
    });
  };

  RED.nodes.registerType("simple-dalle3", main);
};
