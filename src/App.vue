<template>
  <div id="app">
    <section class="hello-ripple">
    <h1>Example: using Ripple in Vue.js</h1>
    <p>
      This is a SPA created by
      <a href="https://cli.vuejs.org/" target="_blank">Vue CLI</a> and
      <a href="https://www.ripple.sdp.vic.gov.au/" target="_blank"
        >Ripple components</a
      >
    </p>
    <data-viz />
        <rpl-divider />

    <rpl-accordion
      title="More details"
      :accordions="[
        {
          title: 'Notes',
          content:
            '<p>Yarn install does not finish when the version of node is 16: <pre>nvm ls</pre><pre>->     v15.14.0</pre><pre>       v16.11.0</pre></p>',
        },
        {
          title: 'How to deploy',
          content:
            '<div><p>Once your merge request has been accepted, simply merge to the branch which matches your desired environment. Choices are: </p><ul><li>production</li><li>staging</li><li>uat1</li><li>uat2</li></ul><p><b>Note:</b> only staging uses the development environment setting: <pre>NODE_ENV = development</pre> The rest use production settings.</p></div>',
        },
      ]"
      :single="false"
    />
    <rpl-divider />
    <div>
      <img class="logo" alt="Vue logo" src="./assets/logo.png" />
      <img class="logo" alt="Ripple logo" src="./assets/sdp-ripple.png" />
    </div>
    </section>
  </div>
</template>

<script>
import DataViz from "./components/DataViz.vue";
import { RplDivider } from "@dpc-sdp/ripple-global";
import { RplAccordion } from "@dpc-sdp/ripple-accordion";

export default {
  name: "app",
  components: {
    DataViz,
    RplDivider,
    RplAccordion,
  },
};
</script>

<style lang="scss">
// Import global style in app level.
@import "~@dpc-sdp/ripple-global/style";

#app {
  text-align: center;
  margin-top: 1rem;

  .logo {
    height: 50px;
    padding-right: 40px;
  }
}
.hello-ripple {
  text-align: left;
  max-width: 1024px;
  margin: auto;
}

pre {background-color: #ececec; padding: 8px; margin: 0; border-bottom: 3px solid #d2d2d2}

</style>
