<template>
  <section class="hello-ripple rpl-data-viz">
    <h3>Plotly with Ripple</h3>
    <div v-if="loading" class="loading">Loading data, please wait...</div>
    <rpl-divider />
    <Plotly
      v-if="!loading"
      :data="data"
      :layout="layout"
      :display-mode-bar="false"
    ></Plotly>

  </section>
</template>

<script>
import { RplDivider } from "@dpc-sdp/ripple-global";
import { Plotly } from "vue-plotly";

var plotData = null;

export default {
  name: "DataViz",
  components: {
    RplDivider,
    Plotly,
  },
  data() {
    return {
      loading: true,
      data: plotData,
      layout: {
        title: "COVID cases: inner melbourne, by postcode",
      },

      html: `
<p>Lorem ipsum dolor sit amet!!! consectetur adipiscing elit. Duis ut mauris magna. Nulla scelerisque maximus purus eu lacinia. In vestibulum elit augue, aliquet lobortis tellus interdum eu.</p>
<p><img src="https://via.placeholder.com/150" /></p>
<rpl-button href="https://ripple.sdp.vic.gov.au" theme="primary">Ripple</rpl-button>
`,
    };
  },
  created() {
    //https://discover.data.vic.gov.au/api/3/action/datastore_search?resource_id=d35dd0fb-5288-4194-8f77-373e2b2cc44d&limit=5
    fetch(
      "https://discover.data.vic.gov.au/api/3/action/datastore_search?resource_id=e3c72a49-6752-4158-82e6-116bea8f55c8&limit=8"
    )
      .then((response) => response.json())
      .then((data) => {
        this.html = data.result.total;
        this.data = [
          {
            x: data.result.records.map((item) => {
              return item.postcode;
            }),
            y: data.result.records.map((item) => {
              return item.cases;
            }),
            type: "bar",
          },
        ];
        //y = w.result.records.map((x) => {return x.postcode})
        this.loading = false;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@dpc-sdp/ripple-global/scss/settings";
@import "~@dpc-sdp/ripple-global/scss/tools";

</style>
