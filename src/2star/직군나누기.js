// 스킬 체크 테스트 레벨2
function solution(info, query) {
  let infos = {
    cpp: {
      frontend: {
        junior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
        senior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
      },
      backend: {
        junior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
        senior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
      },
    },
    java: {
      frontend: {
        junior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
        senior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
      },
      backend: {
        junior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
        senior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
      },
    },
    python: {
      frontend: {
        junior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
        senior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
      },
      backend: {
        junior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
        senior: {
          chicken: {
            grade: [],
          },
          pizza: {
            grade: [],
          },
        },
      },
    }
  };

  for (let i of info) {
    let target = i.split("");
    infos[`${target[0]}`][`${target[1]}`][`${target[2]}`][`${target[3]}`] = [...infos[`${target[0]}`][`${target[1]}`][`${target[2]}`][`${target[3]}`], target[4]]
  }
}
