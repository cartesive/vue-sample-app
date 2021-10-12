<template>
  <section class="hello-ripple rpl-data-viz">
    <h3>Plotly with Ripple</h3>
    <div role="figure" aria-labelledby="caption">
      <div v-if="loading" class="loading">Loading data, please wait...</div>
      <rpl-divider />
      <Plotly
        v-if="!loading"
        :data="data"
        :layout="layout"
        :display-mode-bar="false"
      ></Plotly>
      <div id="caption">
        <rpl-markup :html="ariacaption" />
      </div>
    </div>
  </section>
</template>

<script>
import { RplDivider } from "@dpc-sdp/ripple-global";
import { RplMarkup } from "@dpc-sdp/ripple-markup";
import { Plotly } from "vue-plotly";

var plotData = null;

export default {
  name: "DataViz",
  components: {
    RplDivider,
    RplMarkup,
    Plotly,
  },
  data() {
    return {
      loading: true,
      data: plotData,
      layout: {
        title: "COVID cases: inner melbourne, by postcode",
      },

      ariacaption: `
<p>Please wait</p>
`,
    };
  },
  created() {
    fetch(
      "https://discover.data.vic.gov.au/api/3/action/datastore_search?resource_id=e3c72a49-6752-4158-82e6-116bea8f55c8&limit=8"
    )
      .then((response) => response.json())
      .then((data) => {
        this.ariacaption =
          "<strong>Caption:</strong> Bar graph depicting COVID-19 cases in selected inner-city Melbourne postcodes. The case number are: " +
          data.result.records.map(
            (item) =>
              " " +
              item.cases.toString() +
              " cases in postcode " +
              item.postcode.toString()
          ) +
          " for a total of " +
          data.result.total +
          " cases";
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
