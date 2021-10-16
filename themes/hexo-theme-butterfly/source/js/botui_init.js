function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hello, 欢迎光临雪中的博客😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是博主MrZeFr😄"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以叫我子峰😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于雪中的博客的故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。雪中的博客是一个个人性质的博客，我会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 15000,
            content: "起这个名字是因为我参考了别人的，所以我就起了这个雪中的博客这个名字!"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "你是不是觉得这个博客有一点花里胡哨了呢？👀"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "比如字体和聊天窗！🎉"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "碎碎念是个人日记哦，流水账一样的，不要看，很羞耻的。😶"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "我个人最推荐的是文章版块哦，这里可都是我引以为豪的作品呢💝！敬请观看吧，长篇连载对我来说是个挑战，很可能断更哦👻"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "为什么你的网名叫MrZeFr呢？🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "因为其中包含着我名字的含义😏，MZF，emm🤔，大概是因为这是我瞎想的吧！"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "😲，为什么你的博客这么花里胡哨呢？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "这个是因为😏参考了很多大佬的文章,进行的一些修改！ "
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "大多数修改来自Akilar の糖果屋~"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "方便透露一下真名吗？👀",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "emmmm,其中子峰就是我的一半的真名，还有一个自己猜一下吧~😏"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "我只是一名孩子而已了^_^"
          })
        })
      }
  }