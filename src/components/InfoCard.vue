<template>
   <div class="card">
      <div class="header">
         <img src="@/assets/img/logo-510.png" alt="Logo 510" class="logo" />
         <div class="status">
            Unpaid
         </div>
      </div>

      <div class="info">
         <div class="left">
            <div class="label">Invoice {{ info.id }}</div>
            <div class="result">H3110017</div>
         </div>
         <div class="right">
            <div class="label">
               Total amount
            </div>
            <div class="result">
               &euro; 204
            </div>
         </div>
      </div>
      <div class="agents">
         <div class="left">
            <div class="label">Buyer Name</div>
            <div class="result">STF France</div>
         </div>
         <div class="right">
            <div class="label">
               Seller Name
            </div>
            <div class="result">
               STF Belgium
            </div>
         </div>
      </div>
      <div class="date">
         <div class="left">
            <div class="label">Started</div>
            <div class="result">14 FEB 2020</div>
         </div>
         <div class="right">
            <div class="label">
               Blockchain Address
            </div>
            <div class="result">
               0x4E5748...C81868F6
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["info"],
};
</script>
<style lang="scss" scoped>
.card {
   max-width: 580px;
   max-height: 330px;
   width: 50vw;
   height: 50vh;
   padding: 60px 50px;
   border-radius: 8px;
   background: #fff;
   box-shadow: 0px 0px 18px -13px rgba(0, 0, 0, 0.5);
   display: flex;
   flex-direction: column;
   .logo {
      width: 100px;
      height: auto;
      margin-bottom: 20px;
   }
   .label {
      font-size: $fontSizeSM;
      font-weight: 400;
      color: $textColorLight;
   }
   div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
   }
   .left,
   .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }

   .header {
      .status {
         color: $warningColor;
         border: 1px solid $warningColor;
         border-radius: 20px;
         padding: 5px 10px;
         font-size: $fontSizeSM;
         font-weight: 400;
      }
   }
   .info {
      margin-bottom: 20px;
      .right {
         align-items: flex-end;
      }
      .result {
         font-size: $fontSizeLG;
         font-weight: 300;
         color: $infoColor;
      }
   }
   .agents,
   .date {
      justify-content: flex-start;
      .left,
      .right {
         width: 50%;
      }
      .result {
         font-weight: 300;
         color: $textColorDark;
      }
   }
}
@media (max-width: 450px) {
   .card {
      max-width: 580px;
      max-height: 330px;
      width: 65vw;
      height: 50vh;
      padding: 40px;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0px 0px 18px -13px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      .logo {
         width: 80px;
         height: auto;
         margin-bottom: 20px;
      }
   }
}
</style>
