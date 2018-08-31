module.exports = {
  question: [
    {
      name: "author",
      type: "input",
      message: "请输入开发者名称(package.author)",
      validate: function (ans) {
        return /^.+$/.test(ans) ? true : '不为空';
      },
      default: ""
    }
  ]
}
