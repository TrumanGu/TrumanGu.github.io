<template>
  <section class="article-item tg-card" v-viewer>
    <div class="text-wrapper">
      <time class="tg-small tg-heading"></time>
      <div class="article-item__title">
        <a v-if="isDetailPage" href="#">
          <h1>{{title}}</h1>
          <!-- <span v-html="this.$marked(title)"></span> -->
        </a>
        <router-link v-else :to="{ name: 'article-detail', params: { id:id }}">
          <!-- <span v-html="this.$marked(title)"></span> -->
          <h1>{{title}}</h1>
        </router-link>

        <p>
          <span>
            <svg-icon iconClass="date" style="color:#4990EE;"></svg-icon>
            <time>&nbsp;{{ createdAt.slice(0,10) }}</time>
            <!-- {{ createdAt.slice(0,10) }} -->
          </span>
          <span>&nbsp;&nbsp;</span>
          <span>
            <svg-icon iconClass="time" style="color: lightpink"></svg-icon>
            <i>&nbsp;{{ fullTime?fullTime:readTime }} min read</i>
          </span>
        </p>
      </div>
      <div class="markdown-html" :class="h1Class">
        <pre v-html="renderDom"></pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "article-item",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    body: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    createdAt: {
      type: String
    },
    fullTime: {
      type: Number
    }
  },
  data() {
    return {
      readTime: "",
      body_half: "",
      renderDom: "" // 实际要渲染的dom
    };
  },
  computed: {
    isDetailPage() {
      return this.$route.name === "article-detail";
    },
    h1Class() {
      if (this.$route.name === "aritcle-detail") {
        return "h1-hidden";
      } else {
        return "";
      }
    }
  },
  mounted() {
    this.readTime = Number.parseInt(this.body.length / 200);

    let index = this.body.match(/###?/);
    if (this.$route.name === "article-detail") {
      this.body_half = this.body;
    } else if (index) {
      this.body_half = this.body.slice(this.title.length + 4, index.index - 1);
    } else {
      this.body_half = this.body;
    }
    this.renderDom = this.$marked(this.body_half);
    this.$nextTick(() => {
      this.$Prism.highlightAll();
    });

    function hasClass(obj, cls) {
      return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }

    function removeClass(obj, cls) {
      if (hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, " ");
      }
    }
    this.$nextTick(() => {
      let containers = document.querySelectorAll(".gauss-img");
      for (let elem of containers) {
        let qualitySrc = elem.getAttribute("data-src");
        let qualityImg = new Image();
        qualityImg.src = qualitySrc;
        qualityImg.onload = () => {
          removeClass(elem, "gauss-style");
          elem.src = qualitySrc;
        };
      }
    });
  },
  created() {},
  watch: {
    body(new_val) {
      this.body_half = new_val;
    }
  }
};
</script>

<style lang="scss">
.h1-hidden {
  h1 {
    display: none;
  }
}
</style>
