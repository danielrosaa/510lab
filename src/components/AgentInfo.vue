<template>
   <div class="card">
      <div>{{ agent.nature }}</div>
      <div>{{ agent.operatingName }}</div>
      <div>{{ agent.address.street }}</div>
      <div>{{ agent.address.location }}</div>
      <div>{{ agent.code }}</div>
      <div>{{ agent.operatingName }}</div>
      <div>{{ agent.natactivityure }}</div>
      <div>{{ agent.tradeRegisterNumber }}</div>
      <div>{{ agent.vat }}</div>
      <div>{{ agent.iban }}</div>
      <div>{{ agent.bicCode }}</div>
   </div>
</template>

<script>
export default {
   props: ["agent"],
};
</script>
<style lang="scss" scoped>
.card {
   max-width: 330px;
   max-height: 330px;
   width: 50vw;
   height: 50vh;
   padding: 60px 50px;
   border-radius: 8px;
   background: #fff;
   box-shadow: 0px 0px 18px -13px rgba(0, 0, 0, 0.5);
   display: flex;
   flex-direction: column;
   justify-content: center;
}
</style>
