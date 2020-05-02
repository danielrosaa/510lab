<template>
   <div class="title">
      <div>
         Show me
         <span class="data">Invoices</span> of
         <span class="data">STF Belgium</span> from
         <span class="data">January</span> to <span class="data">April</span> of
         <span class="data">2020</span>
      </div>
   </div>
</template>

<script>
export default {
   name: "Searched",
};
</script>

<style lang="scss" scoped>
.title {
   display: inline-flex;
   align-items: center;
   text-align: center;
   color: $textColorLight;
}

.data {
   color: $textColorDark;
}
</style>
