const __resolved__virtual_storySource_srcModulesUiComponentsAppSidebarAppsidebarStoryVue = '<script setup lang="ts">\n<\/script>\n\n<template>\n  <Story\n    title="App/Sidebar/AppSidebar"\n  >\n    <Variant title="Default">\n      <div class="grid grid-cols-sidebar">\n        <AppSidebar has-hidden>\n          <AppSidebarCategory>\n            <template #title>\n              Category 1\n            </template>\n            <template #content>\n              <AppSidebarItem to="/home">\n                Home\n              </AppSidebarItem>\n              <AppSidebarItem has-children>\n                Dropdown\n                <template #children>\n                  <AppSidebarItem to="/home">\n                    Item 1\n                  </AppSidebarItem>\n                  <AppSidebarItem has-children>\n                    Item 2\n                    <template #children>\n                      <AppSidebarItem to="/home">\n                        Item 1\n                      </AppSidebarItem>\n                      <AppSidebarItem to="/home">\n                        Item 2\n                      </AppSidebarItem>\n                      <AppSidebarItem to="/home">\n                        Item 3\n                      </AppSidebarItem>\n                    </template>\n                  </AppSidebarItem>\n                  <AppSidebarItem to="/home">\n                    Item 3\n                  </AppSidebarItem>\n                </template>\n              </AppSidebarItem>\n            </template>\n          </AppSidebarCategory>\n          <AppSidebarCategory>\n            <template #title>\n              Category 2\n            </template>\n            <template #content>\n              <AppSidebarItem to="/home">\n                Item 1\n              </AppSidebarItem>\n              <AppSidebarItem to="/home">\n                Item 2\n              </AppSidebarItem>\n              <AppSidebarItem to="/home">\n                Item 3\n              </AppSidebarItem>\n            </template>\n          </AppSidebarCategory>\n        </AppSidebar>\n        <div class="transition-all duration-500">\n          Content here\n        </div>\n      </div>\n    </Variant>\n    <Variant title="Minified">\n      <div class="grid grid-cols-sidebar">\n        <AppSidebar has-minified>\n          <AppSidebarCategory>\n            <template #title>\n              Category 1\n            </template>\n            <template #content>\n              <AppSidebarItem to="/home">\n                Home\n              </AppSidebarItem>\n              <AppSidebarItem has-children>\n                Dropdown\n                <template #children>\n                  <AppSidebarItem to="/home">\n                    Item 1\n                  </AppSidebarItem>\n                  <AppSidebarItem has-children>\n                    Item 2\n                    <template #children>\n                      <AppSidebarItem to="/home">\n                        Item 1\n                      </AppSidebarItem>\n                      <AppSidebarItem to="/home">\n                        Item 2\n                      </AppSidebarItem>\n                      <AppSidebarItem to="/home">\n                        Item 3\n                      </AppSidebarItem>\n                    </template>\n                  </AppSidebarItem>\n                  <AppSidebarItem to="/home">\n                    Item 3\n                  </AppSidebarItem>\n                </template>\n              </AppSidebarItem>\n            </template>\n          </AppSidebarCategory>\n          <AppSidebarCategory>\n            <template #title>\n              Category 2\n            </template>\n            <template #content>\n              <AppSidebarItem to="/home">\n                Item 1\n              </AppSidebarItem>\n              <AppSidebarItem to="/home">\n                Item 2\n              </AppSidebarItem>\n              <AppSidebarItem to="/home">\n                Item 3\n              </AppSidebarItem>\n            </template>\n          </AppSidebarCategory>\n        </AppSidebar>\n        <div class="transition-all duration-500">\n          Content here\n        </div>\n      </div>\n    </Variant>\n  </Story>\n</template>\n';
export {
  __resolved__virtual_storySource_srcModulesUiComponentsAppSidebarAppsidebarStoryVue as default
};
