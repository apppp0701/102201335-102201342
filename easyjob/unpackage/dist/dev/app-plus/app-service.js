if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$r = {
    data() {
      return {
        phone: "",
        password: "",
        showError: false
      };
    },
    methods: {
      handleLogin() {
        uni.switchTab({
          url: "/pages/index/index"
        });
      },
      navigateToRegister() {
        uni.navigateTo({
          url: "/pages/register/choice"
        });
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "lllogin-container" }, [
      vue.createCommentVNode(" Header "),
      vue.createElementVNode("view", { class: "llheader" }, [
        vue.createElementVNode("text", { class: "lltitle" }, "HELLO "),
        vue.createElementVNode("text", { class: "llsubtitle" }, "欢迎使用ProjectPartner")
      ]),
      vue.createCommentVNode(" Login Form "),
      vue.createElementVNode("view", { class: "llform" }, [
        vue.createElementVNode("view", { class: "llinput-group" }, [
          vue.createElementVNode("text", { class: "llicon" }, "👤"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "llinput",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.phone = $event),
              placeholder: "请输入手机号"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.phone]
          ])
        ]),
        vue.createElementVNode("view", { class: "llinput-group" }, [
          vue.createElementVNode("text", { class: "llicon" }, "🔒"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "llinput",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.password = $event),
              type: "password",
              placeholder: "请输入密码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.password]
          ])
        ])
      ]),
      vue.createCommentVNode(" Buttons "),
      vue.createElementVNode("button", {
        class: "lllogin-button",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.handleLogin && $options.handleLogin(...args))
      }, "登录"),
      vue.createElementVNode("button", {
        class: "llregister-button",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.navigateToRegister && $options.navigateToRegister(...args))
      }, "注册"),
      vue.createCommentVNode(" Error Message "),
      $data.showError ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: "error-message"
      }, "登录失败")) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-e4e4508d"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/login/login.vue"]]);
  const _imports_0$9 = "/static/button.png";
  const _sfc_main$q = {
    data() {
      return {
        projects: [
          {
            title: "数学建模比赛项目",
            recruit: "2人",
            deadline: "2024年11月10日",
            id: "1"
          },
          {
            title: "人工智能研究项目",
            recruit: "3人",
            deadline: "2024年11月11日",
            id: "2"
          },
          {
            title: "机器人设计大赛",
            recruit: "4人",
            deadline: "2024年11月12日",
            id: "3"
          },
          {
            title: "商业案例分析竞赛",
            recruit: "5人",
            deadline: "2024年11月13日",
            id: "4"
          },
          {
            title: "创新创意设计大赛",
            recruit: "6人",
            deadline: "2024年11月14日",
            id: "5"
          },
          {
            title: "电子设计大赛",
            recruit: "4人",
            deadline: "2024年11月15日",
            id: "6"
          }
          // 更多项目...
        ]
      };
    },
    methods: {
      navigateToDetail(item) {
        if (item.id === "1") {
          uni.navigateTo({
            url: "/pages/post/post1"
          });
        }
        if (item.id === "6") {
          uni.navigateTo({
            url: "/pages/post/post6"
          });
        }
        if (item.id === "2") {
          uni.navigateTo({
            url: "/pages/post/post2"
          });
        }
        if (item.id === "3") {
          uni.navigateTo({
            url: "/pages/post/post3"
          });
        }
        if (item.id === "4") {
          uni.navigateTo({
            url: "/pages/post/post4"
          });
        }
        if (item.id === "5") {
          uni.navigateTo({
            url: "/pages/post/post5"
          });
        }
      },
      navigateToPost() {
        uni.navigateTo({
          url: "/pages/creat/creat"
        });
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "iicontainer" }, [
      vue.createCommentVNode(" 顶部文字 "),
      vue.createElementVNode("view", { class: "iiheader" }, [
        vue.createElementVNode("text", { class: "iititle" }, "项目推荐"),
        vue.createElementVNode("text", { class: "iisubtitle" }, "精心筛选 只为更优秀的你")
      ]),
      vue.createCommentVNode(" 搜索框 "),
      vue.createElementVNode("view", { class: "iisearch-box" }, [
        vue.createElementVNode("input", {
          class: "iisearch-input",
          type: "text",
          placeholder: "搜索"
        })
      ]),
      vue.createCommentVNode(" 卡片列表 "),
      vue.createElementVNode("view", { class: "iicard-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.projects, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "iicard",
              onClick: ($event) => $options.navigateToDetail(item)
            }, [
              vue.createElementVNode("view", { class: "iicard-header" }, [
                vue.createElementVNode(
                  "text",
                  { class: "iicard-title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "iicard-footer" }, [
                vue.createElementVNode(
                  "text",
                  { class: "iifooter-text" },
                  "招募：" + vue.toDisplayString(item.recruit),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { class: "iifooter-text" },
                  "报名截止：" + vue.toDisplayString(item.deadline),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 右下角按钮 "),
      vue.createElementVNode("view", {
        class: "iifloating-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToPost && $options.navigateToPost(...args))
      }, [
        vue.createElementVNode("image", {
          src: _imports_0$9,
          mode: "aspectFit"
        })
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-1cf27b2a"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/index/index.vue"]]);
  const _imports_0$8 = "/static/message.png";
  const _sfc_main$p = {
    data() {
      return {
        people: [
          {
            name: "董小莉",
            school: "福州大学",
            major: "计算机科学与技术",
            role: "学生",
            id: "1",
            avatar: "../../static/photo/Camera_XHS_17284907275621040g0083128aen7ghk0g49lj.jpg"
          },
          {
            name: "李老师",
            school: "福州大学",
            major: "人工智能",
            role: "老师",
            id: "2",
            avatar: "../../static/photo/Camera_XHS_17284907293721040g0083128aen7ghk1049lj.jpg"
          },
          {
            name: "潘小晴",
            school: "福州大学",
            major: "网络安全",
            role: "学生",
            id: "3",
            avatar: "../../static/photo/Camera_XHS_17284907311851040g0083128aen7ghk1g49lj.jpg"
          },
          {
            name: "王老师",
            school: "福州大学",
            major: "电气工程及其自动化",
            role: "老师",
            id: "4",
            avatar: "../../static/photo/Camera_XHS_17284907330211040g0083128aen7ghk2049lj.jpg"
          },
          {
            name: "蒋方方",
            school: "福州大学",
            major: "机械工程",
            role: "学生",
            id: "5",
            avatar: "../../static/photo/Camera_XHS_17284907348801040g0083128aen7ghk2g49lj.jpg"
          }
          // Add more people as needed
        ]
      };
    },
    methods: {
      goToChat(person) {
        uni.navigateTo({
          url: `/pages/chat/chat?name=${person.name}&id=${person.id}&major=${person.major}&role=${person.role}`
        });
      },
      goToPersonData(person) {
        uni.navigateTo({
          url: `/pages/people/people${person.id}`
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" Header "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("text", { class: "title" }, "人才推荐"),
        vue.createElementVNode("text", { class: "subtitle" }, "寻找更适合你的伙伴")
      ]),
      vue.createCommentVNode(" Search Box "),
      vue.createElementVNode("view", { class: "search-box" }, [
        vue.createElementVNode("input", {
          class: "search-input",
          type: "text",
          placeholder: "搜索"
        })
      ]),
      vue.createCommentVNode(" Person Card List "),
      vue.createElementVNode("view", { class: "card-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.people, (person, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "person-card",
              onClick: ($event) => $options.goToPersonData(person)
            }, [
              vue.createElementVNode("view", { class: "card-content" }, [
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", {
                    src: person.avatar,
                    mode: "aspectFit",
                    class: "avatar-image"
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "person-info" }, [
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-name" },
                      "姓名：" + vue.toDisplayString(person.name),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-school" },
                      "学校：" + vue.toDisplayString(person.school),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-major" },
                      "专业：" + vue.toDisplayString(person.major),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("image", {
                  src: _imports_0$8,
                  mode: "aspectFit",
                  class: "more-icon",
                  onClick: vue.withModifiers(($event) => $options.goToChat(person), ["stop"])
                }, null, 8, ["onClick"])
              ]),
              vue.createElementVNode("view", { class: "role-tag" }, [
                vue.createElementVNode(
                  "text",
                  { class: "tag" },
                  vue.toDisplayString(person.role),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesPeoplePeople = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-aa6316d2"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/people/people.vue"]]);
  const _sfc_main$o = {
    data() {
      return {
        messages: [
          { nickname: "董小莉", hasNew: true, avatar: "../../static/photo/Camera_XHS_17284907275621040g0083128aen7ghk0g49lj.jpg" },
          { nickname: "李老师", hasNew: true, avatar: "../../static/photo/Camera_XHS_17284907293721040g0083128aen7ghk1049lj.jpg" },
          { nickname: "潘小晴", hasNew: true, avatar: "../../static/photo/Camera_XHS_17284907311851040g0083128aen7ghk1g49lj.jpg" },
          { nickname: "王老师", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907330211040g0083128aen7ghk2049lj.jpg" },
          { nickname: "蒋方方", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907348801040g0083128aen7ghk2g49lj.jpg" },
          { nickname: "令狐冲", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907391261040g0083128aen7ghk3g49lj.jpg" },
          { nickname: "陈老师", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907372541040g0083128aen7ghk3049lj.jpg" },
          { nickname: "朱珊珊", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907293721040g0083128aen7ghk1049lj.jpg" },
          { nickname: "韩小钰", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907330211040g0083128aen7ghk2049lj.jpg" },
          { nickname: "张老师", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907429331040g0083128aen7ghk4g49lj.jpg" },
          { nickname: "黄老师", hasNew: false, avatar: "../../static/photo/Camera_XHS_17284907410671040g0083128aen7ghk4049lj.jpg" }
          // Add more messages as needed
        ]
      };
    },
    methods: {
      navigateToChat(index) {
        this.messages[index].hasNew = false;
        uni.navigateTo({
          url: `/pages/chat/chat?nickname=${this.messages[index].nickname}`
        });
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" Message List "),
      vue.createElementVNode("view", { class: "message-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.messages, (message, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "message-card",
              onClick: ($event) => $options.navigateToChat(index)
            }, [
              vue.createElementVNode("view", { class: "avatar" }, [
                vue.createCommentVNode(" 使用 message.avatar 来设置头像 "),
                vue.createElementVNode("image", {
                  src: message.avatar,
                  class: "avatar-image"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode(
                "text",
                { class: "nickname" },
                vue.toDisplayString(message.nickname),
                1
                /* TEXT */
              ),
              message.hasNew ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "new-message-dot"
              })) : vue.createCommentVNode("v-if", true)
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-4c1b26cf"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/message/message.vue"]]);
  const _imports_1$1 = "/static/tab/my2.png";
  const _sfc_main$n = {
    data() {
      return {
        userRole: "teacher",
        // 初始身份为老师，可根据需要更改为 'student'
        username: "张三"
        // 示例用户名
      };
    },
    methods: {
      setRole(role) {
        this.userRole = role;
      },
      navigateToMyProject() {
        uni.navigateTo({
          url: "/pages/myself/myproject"
          // 确保路径正确
        });
      },
      navigateToProjectPage() {
        uni.navigateTo({
          url: "/pages/myself/project"
          // 跳转到 pages/myself/project
        });
      },
      onImageError() {
        uni.showToast({ title: "头像加载失败", icon: "none" });
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 头像框 "),
      vue.createElementVNode("view", { class: "avatar-container" }, [
        vue.createElementVNode(
          "image",
          {
            class: "avatar",
            src: _imports_1$1,
            mode: "aspectFill",
            onError: _cache[0] || (_cache[0] = (...args) => $options.onImageError && $options.onImageError(...args))
          },
          null,
          32
          /* NEED_HYDRATION */
        )
      ]),
      vue.createCommentVNode(" 老师主页 "),
      $data.userRole === "teacher" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "profile"
      }, [
        vue.createElementVNode("text", null, "欢迎你，这里是你的老师主页。"),
        vue.createElementVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateToMyProject && $options.navigateToMyProject(...args))
        }, "我的项目"),
        vue.createElementVNode("button", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateToProjectPage && $options.navigateToProjectPage(...args))
        }, "指导项目")
      ])) : $data.userRole === "student" ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          vue.createCommentVNode(" 学生主页 "),
          vue.createElementVNode("view", { class: "profile" }, [
            vue.createElementVNode(
              "text",
              { class: "role-title" },
              vue.toDisplayString($data.username) + "！",
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", null, "欢迎你，这里是你的学生主页。"),
            vue.createElementVNode("button", {
              onClick: _cache[3] || (_cache[3] = (...args) => $options.navigateToMyProject && $options.navigateToMyProject(...args))
            }, "我的项目"),
            vue.createElementVNode("button", {
              onClick: _cache[4] || (_cache[4] = (...args) => $options.navigateToProjectPage && $options.navigateToProjectPage(...args))
            }, "参与项目")
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "role-switch" }, [
        vue.createElementVNode("text", null, "切换角色:"),
        vue.createElementVNode("button", {
          onClick: _cache[5] || (_cache[5] = ($event) => $options.setRole("teacher"))
        }, "老师"),
        vue.createElementVNode("button", {
          onClick: _cache[6] || (_cache[6] = ($event) => $options.setRole("student"))
        }, "学生")
      ])
    ]);
  }
  const PagesMyselfMyself = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-860aaed2"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/myself/myself.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$m = {
    data() {
      return {
        formData: {
          projectName: "",
          // 项目名称
          projectLeader: "",
          // 项目负责人
          recruitNumber: null,
          // 招募人数
          deadline: "",
          // 初始化截止日期为空
          projectDescription: "",
          // 项目描述
          projectGoal: "",
          // 项目目标
          teamRequirement: ""
          // 团队需求
        }
      };
    },
    methods: {
      bindDateChange(e) {
        const selectedDate = e.detail.value;
        const [year, month, day] = selectedDate.split("-");
        this.formData.deadline = `${year}年${month}月${day}日`;
      },
      formSubmit() {
        formatAppLog("log", "at pages/creat/creat.vue:65", "发布内容:", this.formData);
        this.$router.push("/pages/index/index");
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 表单部分 "),
      vue.createElementVNode(
        "form",
        {
          onSubmit: _cache[7] || (_cache[7] = (...args) => $options.formSubmit && $options.formSubmit(...args))
        },
        [
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                placeholder: "项目名称",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.projectName = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formData.projectName]
            ])
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                placeholder: "项目负责人",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.projectLeader = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formData.projectLeader]
            ]),
            vue.createCommentVNode(" 项目负责人输入框 ")
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "number",
                placeholder: "招募人数",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.recruitNumber = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [
                vue.vModelText,
                $data.formData.recruitNumber,
                void 0,
                { number: true }
              ]
            ])
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.createElementVNode("picker", {
              mode: "date",
              value: $data.formData.deadline,
              start: "2015-09-01",
              end: "2026-09-01",
              onChange: _cache[3] || (_cache[3] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
            }, [
              vue.createElementVNode(
                "view",
                { class: "uni-input" },
                vue.toDisplayString($data.formData.deadline ? $data.formData.deadline : "请选择截止日期"),
                1
                /* TEXT */
              )
            ], 40, ["value"])
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                class: "large-textarea",
                placeholder: "项目描述",
                "auto-height": "",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.projectDescription = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formData.projectDescription]
            ]),
            vue.createCommentVNode(" 修改为项目描述 ")
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                class: "large-textarea",
                placeholder: "项目目标",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.formData.projectGoal = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formData.projectGoal]
            ])
          ]),
          vue.createElementVNode("view", { class: "form-group" }, [
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                class: "large-textarea",
                placeholder: "项目需求",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.formData.teamRequirement = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formData.teamRequirement]
            ])
          ]),
          vue.createElementVNode("button", { "form-type": "submit" }, "发送")
        ],
        32
        /* NEED_HYDRATION */
      ),
      vue.createCommentVNode(" 卡片列表部分 "),
      vue.createElementVNode("view", { class: "card-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.cards, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "card",
              key: index
            }, [
              vue.createElementVNode("view", { class: "card-content" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                )
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesCreatCreat = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-8bc1fca8"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/creat/creat.vue"]]);
  const _sfc_main$l = {
    data() {
      return {
        formData: {
          projectName: "示例项目名称",
          projectLeader: "负责人姓名",
          recruitNumber: 3,
          deadline: "2024年10月10日",
          projectDescription: "这是项目的描述部分",
          projectGoal: "实现XXX目标",
          teamRequirement: "需要会使用XXX工具的人"
        },
        requestStatus: ""
        // 用于存储申请状态
      };
    },
    methods: {
      handleRequestJoin() {
        this.requestStatus = "已申请";
        setTimeout(() => {
          this.requestStatus = "";
        }, 500);
      },
      goToChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 显示的内容部分 "),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目名称"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectName,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目负责人"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectLeader,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "招募人数"),
        vue.createElementVNode("input", {
          type: "number",
          value: $data.formData.recruitNumber,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "截止日期"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.formData.deadline,
          disabled: ""
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.formData.deadline),
            1
            /* TEXT */
          )
        ], 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目描述"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectDescription,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目目标"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectGoal,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "团队需求"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.teamRequirement,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createCommentVNode(" 新增按钮 "),
      vue.createElementVNode("view", { class: "button-container" }, [
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRequestJoin && $options.handleRequestJoin(...args))
        }, "请求加入"),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToChat && $options.goToChat(...args))
        }, "立即沟通")
      ]),
      vue.createCommentVNode(" 显示申请状态 "),
      $data.requestStatus ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "request-status"
        },
        vue.toDisplayString($data.requestStatus),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-0832fc77"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/post/post.vue"]]);
  const _imports_0$7 = "/static/tab/my1.png";
  const _sfc_main$k = {
    data() {
      return {
        chatMessages: [],
        // 现在这个数组为空
        newMessage: ""
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim()) {
          this.chatMessages.push({ text: this.newMessage, type: "sent" });
          this.newMessage = "";
        }
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-container" }, [
      vue.createCommentVNode(" Chat Messages "),
      vue.createElementVNode("view", { class: "messages" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.chatMessages, (msg, index) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: index,
                class: vue.normalizeClass(["message", msg.type])
              },
              [
                msg.type === "received" ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _imports_0$7,
                  mode: "aspectFit",
                  class: "avatar"
                })) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode(
                  "text",
                  { class: "message-text" },
                  vue.toDisplayString(msg.text),
                  1
                  /* TEXT */
                ),
                msg.type === "sent" ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 1,
                  src: _imports_1$1,
                  mode: "aspectFit",
                  class: "avatar"
                })) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" Input Area "),
      vue.createElementVNode("view", { class: "input-area" }, [
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "message-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.newMessage = $event),
            placeholder: "输入消息..."
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.newMessage]
        ]),
        vue.createElementVNode("button", {
          class: "send-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.sendMessage && $options.sendMessage(...args))
        }, "发送")
      ])
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-0a633310"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/chat/chat.vue"]]);
  const _sfc_main$j = {
    data() {
      return {
        avatar: "",
        formFields: [
          { label: "姓名", value: "", placeholder: "请输入姓名", type: "text" },
          { label: "手机号", value: "", placeholder: "请输入手机号", type: "text" },
          { label: "学校", value: "", placeholder: "请输入学校", type: "text" },
          { label: "学院", value: "", placeholder: "请输入学院", type: "text" },
          { label: "专业", value: "", placeholder: "请输入专业", type: "text" },
          { label: "密码", value: "", placeholder: "请输入密码", type: "password" },
          { label: "确认密码", value: "", placeholder: "请确认密码", type: "password" }
        ]
      };
    },
    methods: {
      uploadAvatar() {
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"],
          success: (res) => {
            this.avatar = res.tempFilePaths[0];
          }
        });
      },
      register() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "register-container" }, [
      vue.createCommentVNode(" Avatar Upload "),
      vue.createElementVNode("view", {
        class: "rravatar-upload",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.uploadAvatar && $options.uploadAvatar(...args))
      }, [
        vue.createElementVNode("image", {
          src: $data.avatar ? $data.avatar : "../../static/upload-placeholder.png",
          mode: "rraspectFit",
          class: "rravatar-image"
        }, null, 8, ["src"]),
        !$data.avatar ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "rrupload-text"
        }, "上传头像")) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createCommentVNode(" Registration Form "),
      vue.createElementVNode("view", { class: "rrform" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.formFields, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "rrinput-group",
              key: index
            }, [
              vue.createElementVNode(
                "text",
                { class: "rrlabel" },
                vue.toDisplayString(item.label),
                1
                /* TEXT */
              ),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "rrinput",
                "onUpdate:modelValue": ($event) => item.value = $event,
                type: item.type,
                placeholder: item.placeholder
              }, null, 8, ["onUpdate:modelValue", "type", "placeholder"]), [
                [vue.vModelDynamic, item.value]
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" Submit Button "),
      vue.createElementVNode("button", {
        class: "rrsubmit-button",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.register && $options.register(...args))
      }, "完成")
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/register/register.vue"]]);
  const _imports_0$6 = "/static/teacher.png";
  const _imports_1 = "/static/student.png";
  const _sfc_main$i = {
    methods: {
      selectIdentity(identity) {
        uni.setStorageSync("selectedIdentity", identity);
        uni.navigateTo({
          url: "/pages/register/register"
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" Teacher Section "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("image", {
          src: _imports_0$6,
          mode: "aspectFit",
          class: "identity-image"
        }),
        vue.createElementVNode("button", {
          class: "identity-button",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.selectIdentity("teacher"))
        }, "我是老师")
      ]),
      vue.createElementVNode("view", { class: "divider" }),
      vue.createCommentVNode(" Student Section "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("image", {
          src: _imports_1,
          mode: "aspectFit",
          class: "identity-image"
        }),
        vue.createElementVNode("button", {
          class: "identity-button",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.selectIdentity("student"))
        }, "我是学生")
      ])
    ]);
  }
  const PagesRegisterChoice = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/register/choice.vue"]]);
  const _imports_0$5 = "/static/logo.png";
  const _sfc_main$h = {
    data() {
      return {
        // Static data for display
      };
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createCommentVNode(" Static Avatar "),
      vue.createElementVNode("view", { class: "avatar-display" }, [
        vue.createElementVNode("image", {
          src: _imports_0$5,
          mode: "aspectFit",
          class: "avatar-image"
        })
      ]),
      vue.createCommentVNode(" Static Personal Information "),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "姓名"),
          vue.createElementVNode("text", { class: "info" }, "张三")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "手机号"),
          vue.createElementVNode("text", { class: "info" }, "12345678901")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学校"),
          vue.createElementVNode("text", { class: "info" }, "某某大学")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学院"),
          vue.createElementVNode("text", { class: "info" }, "计算机学院")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "专业"),
          vue.createElementVNode("text", { class: "info" }, "软件工程")
        ])
      ])
    ]);
  }
  const PagesMyselfData = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-4d2a4517"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/myself/data.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        projects: [
          { title: "数学建模比赛项目", id: "1" },
          { title: "人工智能研究项目", id: "2" },
          { title: "创新创意大赛", id: "3" }
        ]
      };
    },
    methods: {
      // 修改跳转方法，根据 ID 直接构造 URL
      navigateToDetail(id) {
        formatAppLog("log", "at pages/myself/myproject.vue:32", id);
        try {
          uni.navigateTo({ url: `/pages/myself/member${id}` });
        } catch (e) {
          formatAppLog("log", "at pages/myself/myproject.vue:37", "这里报错");
        }
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "card-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.projects, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "card",
              onClick: ($event) => $options.navigateToDetail(item.id)
            }, [
              vue.createElementVNode("view", { class: "card-header" }, [
                vue.createElementVNode(
                  "text",
                  { class: "card-title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesMyselfMyproject = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-ef60047d"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/myself/myproject.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        projects: [
          { title: "数学建模比赛项目", recruit: "2人", deadline: "2024年11月1日", id: "1", status: "招募中" },
          { title: "人工智能研究项目", recruit: "3人", deadline: "2024年11月3日", id: "2", status: "招募中" },
          { title: "机器人设计大赛", recruit: "5人", deadline: "2024年11月4日", id: "3", status: "招募中" },
          { title: "英语口语比赛", recruit: "2人", deadline: "2024年11月6日", id: "4", status: "招募中" },
          { title: "海峡杯", recruit: "3人", deadline: "2024年11月5日", id: "5", status: "招募中" },
          { title: "电子设计大赛", recruit: "5人", deadline: "2024年11月2日", id: "6", status: "招募中" }
        ]
      };
    },
    methods: {
      exitProject(index) {
        this.projects[index].status = "已退出";
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "card-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.projects, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item.id,
              class: "card"
            }, [
              vue.createElementVNode("view", { class: "card-header" }, [
                vue.createElementVNode(
                  "text",
                  { class: "card-title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "card-footer" }, [
                vue.createElementVNode(
                  "text",
                  { class: "footer-text" },
                  "招募：" + vue.toDisplayString(item.recruit),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { class: "footer-text" },
                  "报名截止：" + vue.toDisplayString(item.deadline),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("button", {
                  class: vue.normalizeClass(["exit-button", { "exited": item.status === "已退出" }]),
                  onClick: vue.withModifiers(($event) => $options.exitProject(index), ["stop"])
                }, vue.toDisplayString(item.status === "已退出" ? "已退出" : "退出"), 11, ["onClick"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesMyselfProject = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-6ef92fa4"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/myself/project.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        formData: {
          projectName: "数学建模比赛项目",
          projectLeader: "董小莉",
          recruitNumber: 2,
          deadline: "2024年11月10日",
          projectDescription: "本项目将围绕数学建模展开，通过对现实问题的抽象和数学模型的构建，解决具体的实际问题。团队成员将运用数学知识和统计软件进行数据分析，提出解决方案。",
          projectGoal: "通过数学建模方法，解决指定的实际问题，形成具有创新性和实用性的模型，并在比赛中获得优异成绩。",
          teamRequirement: "团队成员需具备扎实的数学基础，熟悉至少一种数学建模软件（如MATLAB、SPSS、R等），并具有一定的团队合作和问题解决能力。"
        },
        requestStatus: "",
        // 用于存储申请状态
        isJoined: false
        // 用于判断是否已申请
      };
    },
    methods: {
      handleRequestJoin() {
        this.isJoined = true;
      },
      goToChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 显示的内容部分 "),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目名称"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectName,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目负责人"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectLeader,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "招募人数"),
        vue.createElementVNode("input", {
          type: "number",
          value: $data.formData.recruitNumber,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "截止日期"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.formData.deadline,
          disabled: ""
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.formData.deadline),
            1
            /* TEXT */
          )
        ], 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目描述"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectDescription,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目目标"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectGoal,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "团队需求"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.teamRequirement,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createCommentVNode(" 新增按钮 "),
      vue.createElementVNode("view", { class: "button-container" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["button", { "disabled-button": $data.isJoined }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRequestJoin && $options.handleRequestJoin(...args)),
          disabled: $data.isJoined
        }, vue.toDisplayString($data.isJoined ? "已申请" : "请求加入"), 11, ["disabled"]),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToChat && $options.goToChat(...args))
        }, "立即沟通")
      ]),
      vue.createCommentVNode(" 显示申请状态 "),
      $data.requestStatus ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "request-status"
        },
        vue.toDisplayString($data.requestStatus),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-f2acfcf5"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/post/post1.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        formData: {
          projectName: "人工智能研究项目",
          projectLeader: "潘小晴",
          recruitNumber: 3,
          deadline: "2024年11月11日",
          projectDescription: "本项目将深入探讨人工智能领域的前沿技术，通过机器学习、深度学习等方法开展研究。团队成员将致力于开发智能算法，优化数据处理流程，以及实现智能系统的应用。",
          projectGoal: "开发出高效的智能算法，解决特定领域的问题，并在学术会议或竞赛中展示研究成果，推动人工智能技术的实际应用和发展。",
          teamRequirement: "团队成员需具备良好的编程能力，熟悉Python或相关编程语言，了解机器学习和深度学习的基本原理，并具有强烈的探索精神和良好的学习能力。"
        },
        requestStatus: "",
        // 用于存储申请状态
        isJoined: false
        // 用于判断是否已申请
      };
    },
    methods: {
      handleRequestJoin() {
        this.isJoined = true;
      },
      goToChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 显示的内容部分 "),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目名称"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectName,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目负责人"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectLeader,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "招募人数"),
        vue.createElementVNode("input", {
          type: "number",
          value: $data.formData.recruitNumber,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "截止日期"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.formData.deadline,
          disabled: ""
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.formData.deadline),
            1
            /* TEXT */
          )
        ], 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目描述"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectDescription,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目目标"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectGoal,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "团队需求"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.teamRequirement,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createCommentVNode(" 新增按钮 "),
      vue.createElementVNode("view", { class: "button-container" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["button", { "disabled-button": $data.isJoined }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRequestJoin && $options.handleRequestJoin(...args)),
          disabled: $data.isJoined
        }, vue.toDisplayString($data.isJoined ? "已申请" : "请求加入"), 11, ["disabled"]),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToChat && $options.goToChat(...args))
        }, "立即沟通")
      ]),
      vue.createCommentVNode(" 显示申请状态 "),
      $data.requestStatus ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "request-status"
        },
        vue.toDisplayString($data.requestStatus),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-6fc209f6"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/post/post2.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        formData: {
          projectName: "机器人设计大赛",
          projectLeader: "蒋方方",
          recruitNumber: 4,
          deadline: "2024年11月12日",
          projectDescription: "本项目旨在设计和制造能够完成特定任务的机器人，涉及机械结构设计、电子电路搭建、控制算法编写等多个方面。团队成员将共同工作，从零开始打造参赛机器人，并在比赛中展示其性能。",
          projectGoal: "设计并制作出具有创新性、实用性和稳定性的机器人，能够在规定时间内完成大赛设定的任务，力争在机器人设计大赛中获得优异成绩。",
          teamRequirement: "团队成员需具备一定的机械设计、电子工程和编程基础，熟悉至少一种编程语言（如C/C++、Python等），并具有团队合作精神和动手解决问题的能力。"
        },
        requestStatus: "",
        // 用于存储申请状态
        isJoined: false
        // 用于判断是否已申请
      };
    },
    methods: {
      handleRequestJoin() {
        this.isJoined = true;
      },
      goToChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 显示的内容部分 "),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目名称"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectName,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目负责人"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectLeader,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "招募人数"),
        vue.createElementVNode("input", {
          type: "number",
          value: $data.formData.recruitNumber,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "截止日期"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.formData.deadline,
          disabled: ""
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.formData.deadline),
            1
            /* TEXT */
          )
        ], 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目描述"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectDescription,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目目标"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectGoal,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "团队需求"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.teamRequirement,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createCommentVNode(" 新增按钮 "),
      vue.createElementVNode("view", { class: "button-container" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["button", { "disabled-button": $data.isJoined }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRequestJoin && $options.handleRequestJoin(...args)),
          disabled: $data.isJoined
        }, vue.toDisplayString($data.isJoined ? "已申请" : "请求加入"), 11, ["disabled"]),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToChat && $options.goToChat(...args))
        }, "立即沟通")
      ]),
      vue.createCommentVNode(" 显示申请状态 "),
      $data.requestStatus ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "request-status"
        },
        vue.toDisplayString($data.requestStatus),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-92650f0d"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/post/post3.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        formData: {
          projectName: "商业案例分析竞赛",
          projectLeader: "韩小钰",
          recruitNumber: 5,
          deadline: "2024年11月13日",
          projectDescription: "本项目将针对给定的商业案例进行分析，通过市场调研、财务分析、战略规划等手段，深入挖掘案例企业的运营状况和潜在问题。团队成员将协作完成案例分析报告，提出具体的改进建议。",
          projectGoal: "通过对商业案例的深入分析，提出具有前瞻性和可操作性的解决方案，旨在提升案例企业的市场竞争力，并在竞赛中展示团队的分析能力和创新思维。",
          teamRequirement: "团队成员需具备良好的商业意识，熟悉市场分析、财务分析等相关知识，具备出色的逻辑思维和沟通能力，同时能够高效协作，共同完成案例分析报告。"
        },
        requestStatus: "",
        // 用于存储申请状态
        isJoined: false
        // 用于判断是否已申请
      };
    },
    methods: {
      handleRequestJoin() {
        this.isJoined = true;
      },
      goToChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 显示的内容部分 "),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目名称"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectName,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目负责人"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectLeader,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "招募人数"),
        vue.createElementVNode("input", {
          type: "number",
          value: $data.formData.recruitNumber,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "截止日期"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.formData.deadline,
          disabled: ""
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.formData.deadline),
            1
            /* TEXT */
          )
        ], 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目描述"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectDescription,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目目标"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectGoal,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "团队需求"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.teamRequirement,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createCommentVNode(" 新增按钮 "),
      vue.createElementVNode("view", { class: "button-container" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["button", { "disabled-button": $data.isJoined }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRequestJoin && $options.handleRequestJoin(...args)),
          disabled: $data.isJoined
        }, vue.toDisplayString($data.isJoined ? "已申请" : "请求加入"), 11, ["disabled"]),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToChat && $options.goToChat(...args))
        }, "立即沟通")
      ]),
      vue.createCommentVNode(" 显示申请状态 "),
      $data.requestStatus ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "request-status"
        },
        vue.toDisplayString($data.requestStatus),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost4 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-458a5592"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/post/post4.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        formData: {
          projectName: "创新创意设计大赛",
          projectLeader: "朱珊珊",
          recruitNumber: 6,
          deadline: "2024年11月14日",
          projectDescription: "本项目旨在激发团队成员的创意思维，通过设计新颖、实用的产品或解决方案来参赛。团队成员将共同探讨设计理念，进行原型制作，并不断完善设计以符合大赛主题和要求。",
          projectGoal: "创造出独特且具有市场潜力的创新设计作品，赢得大赛评委的认可，展现团队的创意设计和实践能力，为未来的产品开发提供有价值的概念。",
          teamRequirement: "团队成员需具备创新思维和良好的设计理念，能够熟练使用设计软件（如Adobe Creative Suite、Sketch等），具备一定的原型制作能力，同时需要具备良好的沟通和团队协作能力，共同推动项目进展。"
        },
        requestStatus: "",
        // 用于存储申请状态
        isJoined: false
        // 用于判断是否已申请
      };
    },
    methods: {
      handleRequestJoin() {
        this.isJoined = true;
      },
      goToChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 显示的内容部分 "),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目名称"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectName,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目负责人"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectLeader,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "招募人数"),
        vue.createElementVNode("input", {
          type: "number",
          value: $data.formData.recruitNumber,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "截止日期"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.formData.deadline,
          disabled: ""
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.formData.deadline),
            1
            /* TEXT */
          )
        ], 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目描述"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectDescription,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目目标"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectGoal,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "团队需求"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.teamRequirement,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createCommentVNode(" 新增按钮 "),
      vue.createElementVNode("view", { class: "button-container" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["button", { "disabled-button": $data.isJoined }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRequestJoin && $options.handleRequestJoin(...args)),
          disabled: $data.isJoined
        }, vue.toDisplayString($data.isJoined ? "已申请" : "请求加入"), 11, ["disabled"]),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToChat && $options.goToChat(...args))
        }, "立即沟通")
      ]),
      vue.createCommentVNode(" 显示申请状态 "),
      $data.requestStatus ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "request-status"
        },
        vue.toDisplayString($data.requestStatus),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost5 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-b9f700b4"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/post/post5.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        formData: {
          projectName: "电子设计大赛",
          projectLeader: "令狐冲",
          recruitNumber: 4,
          deadline: "2024年11月15日",
          projectDescription: "本项目将围绕电子技术领域，设计并实现一个具有创新性和实用性的电子系统或设备。团队成员将参与到电路设计、程序编写、系统集成等各个环节，共同完成一个功能完备的电子作品。",
          projectGoal: "设计并制作出技术先进、性能稳定的电子系统，能够在规定的时间内完成大赛设定的任务，争取在电子设计大赛中获得优异成绩，展现团队的电子技术实力和创新精神。",
          teamRequirement: "团队成员需具备扎实的电子工程基础知识，熟悉电路设计、嵌入式编程和硬件调试，掌握至少一种电路设计软件（如Altium Designer、Eagle等），并具备良好的问题解决能力和团队合作精神。"
        },
        requestStatus: "",
        // 用于存储申请状态
        isJoined: false
        // 用于判断是否已申请
      };
    },
    methods: {
      handleRequestJoin() {
        this.isJoined = true;
      },
      goToChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 显示的内容部分 "),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目名称"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectName,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目负责人"),
        vue.createElementVNode("input", {
          type: "text",
          value: $data.formData.projectLeader,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "招募人数"),
        vue.createElementVNode("input", {
          type: "number",
          value: $data.formData.recruitNumber,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "截止日期"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.formData.deadline,
          disabled: ""
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.formData.deadline),
            1
            /* TEXT */
          )
        ], 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目描述"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectDescription,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "项目目标"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.projectGoal,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createElementVNode("view", { class: "form-group" }, [
        vue.createElementVNode("label", { class: "label" }, "团队需求"),
        vue.createElementVNode("textarea", {
          class: "large-textarea",
          value: $data.formData.teamRequirement,
          disabled: ""
        }, null, 8, ["value"])
      ]),
      vue.createCommentVNode(" 新增按钮 "),
      vue.createElementVNode("view", { class: "button-container" }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["button", { "disabled-button": $data.isJoined }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleRequestJoin && $options.handleRequestJoin(...args)),
          disabled: $data.isJoined
        }, vue.toDisplayString($data.isJoined ? "已申请" : "请求加入"), 11, ["disabled"]),
        vue.createElementVNode("button", {
          class: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToChat && $options.goToChat(...args))
        }, "立即沟通")
      ]),
      vue.createCommentVNode(" 显示申请状态 "),
      $data.requestStatus ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "request-status"
        },
        vue.toDisplayString($data.requestStatus),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPostPost6 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-e1c9a6bc"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/post/post6.vue"]]);
  const _imports_0$4 = "/static/photo/Camera_XHS_17284907275621040g0083128aen7ghk0g49lj.jpg";
  const _sfc_main$8 = {
    data() {
      return {
        // Static data for display
      };
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createCommentVNode(" Static Avatar "),
      vue.createElementVNode("view", { class: "avatar-display" }, [
        vue.createElementVNode("image", {
          src: _imports_0$4,
          mode: "aspectFit",
          class: "avatar-image"
        })
      ]),
      vue.createCommentVNode(" Static Personal Information "),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "姓名"),
          vue.createElementVNode("text", { class: "info" }, "董小莉")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "手机号"),
          vue.createElementVNode("text", { class: "info" }, "12345678901")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学校"),
          vue.createElementVNode("text", { class: "info" }, "福州大学")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学院"),
          vue.createElementVNode("text", { class: "info" }, "计算机与大数据学院")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "专业"),
          vue.createElementVNode("text", { class: "info" }, "计算机科学与技术")
        ])
      ])
    ]);
  }
  const PagesPeoplePeople1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-f7868b16"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/people/people1.vue"]]);
  const _imports_0$3 = "/static/photo/Camera_XHS_17284907293721040g0083128aen7ghk1049lj.jpg";
  const _sfc_main$7 = {
    data() {
      return {
        // Static data for display
      };
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createCommentVNode(" Static Avatar "),
      vue.createElementVNode("view", { class: "avatar-display" }, [
        vue.createElementVNode("image", {
          src: _imports_0$3,
          mode: "aspectFit",
          class: "avatar-image"
        })
      ]),
      vue.createCommentVNode(" Static Personal Information "),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "姓名"),
          vue.createElementVNode("text", { class: "info" }, "李老师")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "手机号"),
          vue.createElementVNode("text", { class: "info" }, "12345678901")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学校"),
          vue.createElementVNode("text", { class: "info" }, "福州大学")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学院"),
          vue.createElementVNode("text", { class: "info" }, "计算机与大数据学院")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "专业"),
          vue.createElementVNode("text", { class: "info" }, "人工智能")
        ])
      ])
    ]);
  }
  const PagesPeoplePeople2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-2d906f35"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/people/people2.vue"]]);
  const _imports_0$2 = "/static/photo/Camera_XHS_17284907311851040g0083128aen7ghk1g49lj.jpg";
  const _sfc_main$6 = {
    data() {
      return {
        // Static data for display
      };
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createCommentVNode(" Static Avatar "),
      vue.createElementVNode("view", { class: "avatar-display" }, [
        vue.createElementVNode("image", {
          src: _imports_0$2,
          mode: "aspectFit",
          class: "avatar-image"
        })
      ]),
      vue.createCommentVNode(" Static Personal Information "),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "姓名"),
          vue.createElementVNode("text", { class: "info" }, "潘小晴")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "手机号"),
          vue.createElementVNode("text", { class: "info" }, "12345678901")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学校"),
          vue.createElementVNode("text", { class: "info" }, "福州大学")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学院"),
          vue.createElementVNode("text", { class: "info" }, "计算机与大数据学院")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "专业"),
          vue.createElementVNode("text", { class: "info" }, "网络安全")
        ])
      ])
    ]);
  }
  const PagesPeoplePeople3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-8de864e3"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/people/people3.vue"]]);
  const _imports_0$1 = "/static/photo/Camera_XHS_17284907330211040g0083128aen7ghk2049lj.jpg";
  const _sfc_main$5 = {
    data() {
      return {
        // Static data for display
      };
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createCommentVNode(" Static Avatar "),
      vue.createElementVNode("view", { class: "avatar-display" }, [
        vue.createElementVNode("image", {
          src: _imports_0$1,
          mode: "aspectFit",
          class: "avatar-image"
        })
      ]),
      vue.createCommentVNode(" Static Personal Information "),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "姓名"),
          vue.createElementVNode("text", { class: "info" }, "王老师")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "手机号"),
          vue.createElementVNode("text", { class: "info" }, "12345678901")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学校"),
          vue.createElementVNode("text", { class: "info" }, "福州大学")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学院"),
          vue.createElementVNode("text", { class: "info" }, "物信学院")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "专业"),
          vue.createElementVNode("text", { class: "info" }, "电气工程及其自动化")
        ])
      ])
    ]);
  }
  const PagesPeoplePeople4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-ad7b7946"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/people/people4.vue"]]);
  const _imports_0 = "/static/photo/Camera_XHS_17284907348801040g0083128aen7ghk2g49lj.jpg";
  const _sfc_main$4 = {
    data() {
      return {
        // Static data for display
      };
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createCommentVNode(" Static Avatar "),
      vue.createElementVNode("view", { class: "avatar-display" }, [
        vue.createElementVNode("image", {
          src: _imports_0,
          mode: "aspectFit",
          class: "avatar-image"
        })
      ]),
      vue.createCommentVNode(" Static Personal Information "),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "姓名"),
          vue.createElementVNode("text", { class: "info" }, "蒋方方")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "手机号"),
          vue.createElementVNode("text", { class: "info" }, "12345678901")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学校"),
          vue.createElementVNode("text", { class: "info" }, "福州大学")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "学院"),
          vue.createElementVNode("text", { class: "info" }, "机械学院")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createElementVNode("text", { class: "label" }, "专业"),
          vue.createElementVNode("text", { class: "info" }, "机械工程")
        ])
      ])
    ]);
  }
  const PagesPeoplePeople5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-b79027c8"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/people/people5.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        people: [
          {
            name: "李小明",
            id: "福州大学",
            major: "计算机科学与技术",
            // joinStatus: this.getJoinStatus('李小明') || '同意申请',
            joinStatus: "同意申请"
          },
          {
            name: "黄老师",
            id: "福州大学",
            major: "机械工程",
            // joinStatus: this.getJoinStatus('黄老师') || '同意申请',
            joinStatus: "同意申请"
          }
        ],
        overallStatus: "招募中"
      };
    },
    methods: {
      getJoinStatus(name) {
        try {
          return localStorage.getItem(name);
        } catch (e) {
          formatAppLog("log", "at pages/myself/member1.vue:74", "用api后端处理");
        }
      },
      toggleJoinStatus(index) {
        this.people[index].joinStatus = this.people[index].joinStatus === "同意申请" ? "已加入" : "同意申请";
      },
      toggleOverallStatus() {
        if (this.overallStatus === "招募中") {
          this.overallStatus = "进行中";
        } else if (this.overallStatus === "进行中") {
          this.overallStatus = "已完成";
        } else {
          this.overallStatus = "招募中";
        }
      }
      // 删除 goToPersonData 方法
      // goToPersonData(person) {
      //   uni.navigateTo({
      //     url: `/pages/myself/data?name=${person.name}&id=${person.id}&major=${person.major}`
      //   });
      // }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" Person Card List "),
      vue.createElementVNode("view", { class: "card-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.people, (person, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "person-card"
            }, [
              vue.createElementVNode("view", { class: "card-content" }, [
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", {
                    src: _imports_0$5,
                    mode: "aspectFit",
                    class: "avatar-image"
                  })
                ]),
                vue.createElementVNode("view", { class: "person-info" }, [
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-name" },
                      "姓名：" + vue.toDisplayString(person.name),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-id" },
                      "学校：" + vue.toDisplayString(person.id),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-major" },
                      "专业：" + vue.toDisplayString(person.major),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createCommentVNode(" Button to toggle join status "),
                vue.createElementVNode("button", {
                  class: "action-button",
                  onClick: ($event) => $options.toggleJoinStatus(index)
                }, vue.toDisplayString(person.joinStatus), 9, ["onClick"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" Status Toggle Button "),
      vue.createElementVNode("view", { class: "status-toggle-container" }, [
        vue.createElementVNode(
          "button",
          {
            class: "status-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleOverallStatus && $options.toggleOverallStatus(...args))
          },
          vue.toDisplayString($data.overallStatus),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesMyselfMember1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-bdd351f6"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/myself/member1.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        people: [
          {
            name: "蒋方方",
            id: "福州大学",
            major: "计算机科学与技术",
            joinStatus: "同意申请"
          },
          {
            name: "董小莉",
            id: "福州大学",
            major: "机械工程",
            joinStatus: "同意申请"
          }
        ],
        overallStatus: "招募中"
      };
    },
    methods: {
      getJoinStatus(name) {
        return localStorage.getItem(name);
      },
      toggleJoinStatus(person) {
        person.joinStatus = person.joinStatus === "同意申请" ? "已加入" : "同意申请";
      },
      toggleOverallStatus() {
        if (this.overallStatus === "招募中") {
          this.overallStatus = "进行中";
        } else if (this.overallStatus === "进行中") {
          this.overallStatus = "已完成";
        } else {
          this.overallStatus = "招募中";
        }
      }
      // 删除 goToPersonData 方法
      // goToPersonData(person) {
      //   uni.navigateTo({
      //     url: `/pages/myself/data?name=${person.name}&id=${person.id}&major=${person.major}`
      //   });
      // }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" Person Card List "),
      vue.createElementVNode("view", { class: "card-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.people, (person, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "person-card"
            }, [
              vue.createElementVNode("view", { class: "card-content" }, [
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", {
                    src: _imports_0$5,
                    mode: "aspectFit",
                    class: "avatar-image"
                  })
                ]),
                vue.createElementVNode("view", { class: "person-info" }, [
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-name" },
                      "姓名：" + vue.toDisplayString(person.name),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-id" },
                      "学校：" + vue.toDisplayString(person.id),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-major" },
                      "专业：" + vue.toDisplayString(person.major),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createCommentVNode(" Button to toggle join status "),
                vue.createElementVNode("button", {
                  class: "action-button",
                  onClick: vue.withModifiers(($event) => $options.toggleJoinStatus(person), ["stop"])
                }, vue.toDisplayString(person.joinStatus), 9, ["onClick"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" Status Toggle Button "),
      vue.createElementVNode("view", { class: "status-toggle-container" }, [
        vue.createElementVNode(
          "button",
          {
            class: "status-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleOverallStatus && $options.toggleOverallStatus(...args))
          },
          vue.toDisplayString($data.overallStatus),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesMyselfMember2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-a79be2f0"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/myself/member2.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        people: [
          {
            name: "潘小晴",
            id: "福州大学",
            major: "计算机科学与技术",
            joinStatus: "同意申请"
          },
          {
            name: "张老师",
            id: "福州大学",
            major: "机械工程",
            joinStatus: "同意申请"
          }
        ],
        overallStatus: "招募中"
      };
    },
    methods: {
      getJoinStatus(name) {
        return localStorage.getItem(name);
      },
      toggleJoinStatus(person) {
        person.joinStatus = person.joinStatus === "同意申请" ? "已加入" : "同意申请";
      },
      toggleOverallStatus() {
        if (this.overallStatus === "招募中") {
          this.overallStatus = "进行中";
        } else if (this.overallStatus === "进行中") {
          this.overallStatus = "已完成";
        } else {
          this.overallStatus = "招募中";
        }
      }
      // 删除 goToPersonData 方法
      // goToPersonData(person) {
      //   uni.navigateTo({
      //     url: `/pages/myself/data?name=${person.name}&id=${person.id}&major=${person.major}`
      //   });
      // }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" Person Card List "),
      vue.createElementVNode("view", { class: "card-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.people, (person, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "person-card"
            }, [
              vue.createElementVNode("view", { class: "card-content" }, [
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", {
                    src: _imports_0$5,
                    mode: "aspectFit",
                    class: "avatar-image"
                  })
                ]),
                vue.createElementVNode("view", { class: "person-info" }, [
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-name" },
                      "姓名：" + vue.toDisplayString(person.name),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-id" },
                      "学校：" + vue.toDisplayString(person.id),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "person-info-line" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "person-major" },
                      "专业：" + vue.toDisplayString(person.major),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createCommentVNode(" Button to toggle join status "),
                vue.createElementVNode("button", {
                  class: "action-button",
                  onClick: vue.withModifiers(($event) => $options.toggleJoinStatus(person), ["stop"])
                }, vue.toDisplayString(person.joinStatus), 9, ["onClick"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" Status Toggle Button "),
      vue.createElementVNode("view", { class: "status-toggle-container" }, [
        vue.createElementVNode(
          "button",
          {
            class: "status-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleOverallStatus && $options.toggleOverallStatus(...args))
          },
          vue.toDisplayString($data.overallStatus),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesMyselfMember3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-dd847db1"], ["__file", "F:/HBuilderX/easyjob/easyjob/pages/myself/member3.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/people/people", PagesPeoplePeople);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/myself/myself", PagesMyselfMyself);
  __definePage("pages/creat/creat", PagesCreatCreat);
  __definePage("pages/post/post", PagesPostPost);
  __definePage("pages/chat/chat", PagesChatChat);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/register/choice", PagesRegisterChoice);
  __definePage("pages/myself/data", PagesMyselfData);
  __definePage("pages/myself/myproject", PagesMyselfMyproject);
  __definePage("pages/myself/project", PagesMyselfProject);
  __definePage("pages/post/post1", PagesPostPost1);
  __definePage("pages/post/post2", PagesPostPost2);
  __definePage("pages/post/post3", PagesPostPost3);
  __definePage("pages/post/post4", PagesPostPost4);
  __definePage("pages/post/post5", PagesPostPost5);
  __definePage("pages/post/post6", PagesPostPost6);
  __definePage("pages/people/people1", PagesPeoplePeople1);
  __definePage("pages/people/people2", PagesPeoplePeople2);
  __definePage("pages/people/people3", PagesPeoplePeople3);
  __definePage("pages/people/people4", PagesPeoplePeople4);
  __definePage("pages/people/people5", PagesPeoplePeople5);
  __definePage("pages/myself/member1", PagesMyselfMember1);
  __definePage("pages/myself/member2", PagesMyselfMember2);
  __definePage("pages/myself/member3", PagesMyselfMember3);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/HBuilderX/easyjob/easyjob/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
