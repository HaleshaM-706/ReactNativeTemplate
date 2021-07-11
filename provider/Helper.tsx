import { Navigation } from "react-native-navigation";

export default function Helper() {}


Helper.setRoot = function(componentName: string, props?: any) {
  let stack = {
    root: {
      stack: {
        options: {
          topBar: {
            visible: false,
          },
        },
        children: [
          {
            component: {
              name: componentName,
              passProps: props || {},
            },
          },
        ],
      },
    },
  };
  return Navigation.setRoot(stack);
};


Helper.navigateToDashboard = async function(
  props?: any,
  componentName?: any,
  isRefer?: any
) {
  console.log("Root===========>>>>>>>>>>>>", props);

  // let [home, accountGroup, calendar] = await this.getTabIcons();
  let stackData: any = {
    root: {
      id: "rootId",
      sideMenu: {
        left: {
          component: {
            name: "CustomDrawer",
            passProps: props || {},
          },
        },
        center: {
          stack: {
            id: "DashBoardId",
            options: {
              topBar: {
                visible: false,
              },
            },
            children: [
              {
                component: {
                  name: componentName,
                  passProps: {
                    props: props,
                    componentName: componentName,
                    refer: isRefer ? isRefer : null,
                  },
                },
              },
            ],
          },

          // bottomTabs: {
          //   id: 'BottomTabsId',
          //   children: [
          //     {
          //       stack: {
          //         id: "DashBoardId",
          //         children: [
          //           {
          //             component: {
          //               name: componentName,
          //               options: {
          //                 bottomTab: {
          //                   visible: false,
          //                   text: "Dashboard",
          //                   icon: "home",
          //                   // ...tabStyle
          //                 },
          //                 bottomTabs: {},
          //                 topBar: {
          //                   visible: false,
          //                   drawBehind: true,
          //                 }
          //               }
          //             }
          //           }
          //         ],
          //       }
          //     },

          //   ],
          // },
        },
      },
    },
  };
  return Navigation.setRoot(stackData);
};

Helper.pushToEventDetails = function(
  componentId: string,
  props: any,
  fromRegister?: boolean,
  callback?: any
) {
  Navigation.push(componentId, {
    component: {
      name: props.componentName,
      passProps: {
        EventDetailsComponentId: componentId,
        item: props.item,
        callback: callback,
        fromRegister: fromRegister || false,
        eventListId: componentId,
        componentName: props.componentName,
      },
      options: {
        topBar: {
          visible: false,
          title: {
            text: "EventDetails",
          },
        },
        bottomTabs: {
          visible: false,
          drawBehind: true,
          animate: false,
        },
      },
    },
  });
};

Helper.openSidemenu = function(componentId: any, props?: any) {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: true,
      },
    },
    passProps: {
      props: props,
    },
  });
};