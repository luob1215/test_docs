"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[4367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?s.createElement(m,a(a({ref:t},d),{},{components:n})):s.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=n(87462),i=(n(67294),n(3905));const r={},a="Behavior-Driven Development",o={unversionedId:"manual/basics/testing/behavior_driven_development",id:"manual/basics/testing/behavior_driven_development",title:"Behavior-Driven Development",description:"With the bdd.ts module you can write",source:"@site/runtime/manual/basics/testing/behavior_driven_development.md",sourceDirName:"manual/basics/testing",slug:"/manual/basics/testing/behavior_driven_development",permalink:"/runtime/manual/basics/testing/behavior_driven_development",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Documentation Tests",permalink:"/runtime/manual/basics/testing/documentation"},next:{title:"Snapshot Testing",permalink:"/runtime/manual/basics/testing/snapshot_testing"}},l={},u=[{value:"Hooks",id:"hooks",level:2},{value:"Focusing tests",id:"focusing-tests",level:2},{value:"Ignoring tests",id:"ignoring-tests",level:2},{value:"Sanitization options",id:"sanitization-options",level:2},{value:"Permissions option",id:"permissions-option",level:2},{value:"Comparing to Deno.test",id:"comparing-to-denotest",level:2},{value:"Nested test grouping",id:"nested-test-grouping",level:3},{value:"Flat test grouping",id:"flat-test-grouping",level:3},{value:"Mixed test grouping",id:"mixed-test-grouping",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"behavior-driven-development"},"Behavior-Driven Development"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/std/testing/bdd.ts"},"bdd.ts")," module you can write\nyour tests in a familiar format for grouping tests and adding setup/teardown\nhooks used by other JavaScript testing frameworks like Jasmine, Jest, and Mocha."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," function creates a block that groups together several related\ntests. The ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," function registers an individual test case."),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("p",null,"There are 4 types of hooks available for test suites. A test suite can have\nmultiples of each type of hook, they will be called in the order that they are\nregistered. The ",(0,i.kt)("inlineCode",{parentName:"p"},"afterEach")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks will be called whether or not\nthe test case passes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"*All")," hooks will be called once for the whole group\nwhile the ",(0,i.kt)("inlineCode",{parentName:"p"},"*Each")," hooks will be called for each individual test case."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"beforeAll"),": Runs before all of the tests in the test suite."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"afterAll"),": Runs after all of the tests in the test suite finish."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"beforeEach"),": Runs before each of the individual test cases in the test suite."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"afterEach"),": Runs after each of the individual test cases in the test suite.")),(0,i.kt)("p",null,"If a hook is registered at the top level, a global test suite will be registered\nand all tests will belong to it. Hooks registered at the top level must be\nregistered before any individual test cases or test suites."),(0,i.kt)("h2",{id:"focusing-tests"},"Focusing tests"),(0,i.kt)("p",null,"If you would like to run only specific test cases, you can do so by calling\n",(0,i.kt)("inlineCode",{parentName:"p"},"it.only")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"it"),". If you would like to run only specific test suites,\nyou can do so by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"describe.only")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"describe"),"."),(0,i.kt)("p",null,"There is one limitation to this when using the flat test grouping style. When\n",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," is called without being nested, it registers the test with\n",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.test"),". If a child test case or suite is registered with ",(0,i.kt)("inlineCode",{parentName:"p"},"it.only")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"describe.only"),", it will be scoped to the top test suite instead of the file. To\nmake them the only tests that run in the file, you would need to register the\ntop test suite with ",(0,i.kt)("inlineCode",{parentName:"p"},"describe.only")," too."),(0,i.kt)("h2",{id:"ignoring-tests"},"Ignoring tests"),(0,i.kt)("p",null,"If you would like to not run specific individual test cases, you can do so by\ncalling ",(0,i.kt)("inlineCode",{parentName:"p"},"it.ignore")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"it"),". If you would like to not run specific test\nsuites, you can do so by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"describe.ignore")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"describe"),"."),(0,i.kt)("h2",{id:"sanitization-options"},"Sanitization options"),(0,i.kt)("p",null,"Like ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.TestDefinition"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"DescribeDefinition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItDefinition")," have\nsanitization options. They work in the same way."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sanitizeExit"),": Ensure the test case does not prematurely cause the process to\nexit, for example via a call to Deno.exit. Defaults to true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sanitizeOps"),": Check that the number of async completed ops after the test is\nthe same as number of dispatched ops. Defaults to true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sanitizeResources"),': Ensure the test case does not "leak" resources - ie. the\nresource table after the test has exactly the same contents as before the\ntest. Defaults to true.')),(0,i.kt)("h2",{id:"permissions-option"},"Permissions option"),(0,i.kt)("p",null,"Like ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.TestDefinition"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"DescribeDefinition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItDefinition")," have a\n",(0,i.kt)("inlineCode",{parentName:"p"},"permissions")," option. They specify the permissions that should be used to run an\nindividual test case or test suite. Set this to ",(0,i.kt)("inlineCode",{parentName:"p"},'"inherit"')," to keep the calling\nthread's permissions. Set this to ",(0,i.kt)("inlineCode",{parentName:"p"},'"none"')," to revoke all permissions."),(0,i.kt)("p",null,"This setting defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},'"inherit"'),"."),(0,i.kt)("p",null,"There is currently one limitation to this, you cannot use the permissions option\non an individual test case or test suite that belongs to another test suite.\nThat's because internally those tests are registered with ",(0,i.kt)("inlineCode",{parentName:"p"},"t.step")," which does\nnot support the permissions option."),(0,i.kt)("h2",{id:"comparing-to-denotest"},"Comparing to Deno",".","test"),(0,i.kt)("p",null,"The default way of writing tests is using ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"t.step"),". The\n",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," functions have similar call signatures to ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.test"),",\nmaking it easy to switch between the default style and the behavior-driven\ndevelopment style of writing tests. Internally, ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," are\nregistering tests with ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"t.step"),"."),(0,i.kt)("p",null,"Below is an example of a test file using ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"t.step"),". In the\nfollowing sections there are examples of how the same test could be written with\n",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," using nested test grouping, flat test grouping, or a mix of\nboth styles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// https://deno.land/std/testing/bdd_examples/user_test.ts\nimport {\n  assertEquals,\n  assertStrictEquals,\n  assertThrows,\n} from "https://deno.land/std@0.208.0/assert/mod.ts";\nimport {\n  User,\n} from "https://deno.land/std@0.208.0/testing/bdd_examples/user.ts";\n\nDeno.test("User.users initially empty", () => {\n  assertEquals(User.users.size, 0);\n});\n\nDeno.test("User constructor", () => {\n  try {\n    const user = new User("Kyle");\n    assertEquals(user.name, "Kyle");\n    assertStrictEquals(User.users.get("Kyle"), user);\n  } finally {\n    User.users.clear();\n  }\n});\n\nDeno.test("User age", async (t) => {\n  const user = new User("Kyle");\n\n  await t.step("getAge", () => {\n    assertThrows(() => user.getAge(), Error, "Age unknown");\n    user.age = 18;\n    assertEquals(user.getAge(), 18);\n  });\n\n  await t.step("setAge", () => {\n    user.setAge(18);\n    assertEquals(user.getAge(), 18);\n  });\n});\n')),(0,i.kt)("h3",{id:"nested-test-grouping"},"Nested test grouping"),(0,i.kt)("p",null,"Tests created within the callback of a ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," function call will belong to\nthe new test suite it creates. The hooks can be created within it or be added to\nthe options argument for describe."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// https://deno.land/std/testing/bdd_examples/user_nested_test.ts\nimport {\n  assertEquals,\n  assertStrictEquals,\n  assertThrows,\n} from "https://deno.land/std@0.208.0/assert/mod.ts";\nimport {\n  afterEach,\n  beforeEach,\n  describe,\n  it,\n} from "https://deno.land/std@0.208.0/testing/bdd.ts";\nimport {\n  User,\n} from "https://deno.land/std@0.208.0/testing/bdd_examples/user.ts";\n\ndescribe("User", () => {\n  it("users initially empty", () => {\n    assertEquals(User.users.size, 0);\n  });\n\n  it("constructor", () => {\n    try {\n      const user = new User("Kyle");\n      assertEquals(user.name, "Kyle");\n      assertStrictEquals(User.users.get("Kyle"), user);\n    } finally {\n      User.users.clear();\n    }\n  });\n\n  describe("age", () => {\n    let user: User;\n\n    beforeEach(() => {\n      user = new User("Kyle");\n    });\n\n    afterEach(() => {\n      User.users.clear();\n    });\n\n    it("getAge", function () {\n      assertThrows(() => user.getAge(), Error, "Age unknown");\n      user.age = 18;\n      assertEquals(user.getAge(), 18);\n    });\n\n    it("setAge", function () {\n      user.setAge(18);\n      assertEquals(user.getAge(), 18);\n    });\n  });\n});\n')),(0,i.kt)("h3",{id:"flat-test-grouping"},"Flat test grouping"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," function returns a unique symbol that can be used to reference\nthe test suite for adding tests to it without having to create them within a\ncallback. The gives you the ability to have test grouping without any extra\nindentation in front of the grouped tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// https://deno.land/std/testing/bdd_examples/user_flat_test.ts\nimport {\n  assertEquals,\n  assertStrictEquals,\n  assertThrows,\n} from "https://deno.land/std@0.208.0/assert/mod.ts";\nimport {\n  describe,\n  it,\n} from "https://deno.land/std@0.208.0/testing/bdd.ts";\nimport {\n  User,\n} from "https://deno.land/std@0.208.0/testing/bdd_examples/user.ts";\n\nconst userTests = describe("User");\n\nit(userTests, "users initially empty", () => {\n  assertEquals(User.users.size, 0);\n});\n\nit(userTests, "constructor", () => {\n  try {\n    const user = new User("Kyle");\n    assertEquals(user.name, "Kyle");\n    assertStrictEquals(User.users.get("Kyle"), user);\n  } finally {\n    User.users.clear();\n  }\n});\n\nconst ageTests = describe({\n  name: "age",\n  suite: userTests,\n  beforeEach(this: { user: User }) {\n    this.user = new User("Kyle");\n  },\n  afterEach() {\n    User.users.clear();\n  },\n});\n\nit(ageTests, "getAge", function () {\n  const { user } = this;\n  assertThrows(() => user.getAge(), Error, "Age unknown");\n  user.age = 18;\n  assertEquals(user.getAge(), 18);\n});\n\nit(ageTests, "setAge", function () {\n  const { user } = this;\n  user.setAge(18);\n  assertEquals(user.getAge(), 18);\n});\n')),(0,i.kt)("h3",{id:"mixed-test-grouping"},"Mixed test grouping"),(0,i.kt)("p",null,"Both nested test grouping and flat test grouping can be used together. This can\nbe useful if you'd like to create deep groupings without all the extra\nindentation in front of each line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// https://deno.land/std/testing/bdd_examples/user_mixed_test.ts\nimport {\n  assertEquals,\n  assertStrictEquals,\n  assertThrows,\n} from "https://deno.land/std@0.208.0/assert/mod.ts";\nimport {\n  describe,\n  it,\n} from "https://deno.land/std@0.208.0/testing/bdd.ts";\nimport {\n  User,\n} from "https://deno.land/std@0.208.0/testing/bdd_examples/user.ts";\n\ndescribe("User", () => {\n  it("users initially empty", () => {\n    assertEquals(User.users.size, 0);\n  });\n\n  it("constructor", () => {\n    try {\n      const user = new User("Kyle");\n      assertEquals(user.name, "Kyle");\n      assertStrictEquals(User.users.get("Kyle"), user);\n    } finally {\n      User.users.clear();\n    }\n  });\n\n  const ageTests = describe({\n    name: "age",\n    beforeEach(this: { user: User }) {\n      this.user = new User("Kyle");\n    },\n    afterEach() {\n      User.users.clear();\n    },\n  });\n\n  it(ageTests, "getAge", function () {\n    const { user } = this;\n    assertThrows(() => user.getAge(), Error, "Age unknown");\n    user.age = 18;\n    assertEquals(user.getAge(), 18);\n  });\n\n  it(ageTests, "setAge", function () {\n    const { user } = this;\n    user.setAge(18);\n    assertEquals(user.getAge(), 18);\n  });\n});\n')))}c.isMDXComponent=!0}}]);