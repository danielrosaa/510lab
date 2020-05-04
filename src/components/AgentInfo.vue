<template>
   <div class="card">
      <div class="content">
         <div class="nature">{{ agent.nature }}</div>
         <div class="address">{{ agent.operatingName }}</div>
         <div class="address">{{ agent.address.street }}</div>
         <div class="address">{{ agent.address.location }}</div>
         <hr />
         <div>
            <div class="label">
               Code
            </div>
            <div class="result">{{ agent.code }}</div>
         </div>
         <div>
            <div class="label">
               Operating Name
            </div>
            <div class="result">{{ agent.operatingName }}</div>
         </div>

         <div>
            <div class="label">
               Function
            </div>
            <div class="result">{{ agent.activity }}</div>
         </div>
         <div>
            <div class="label">
               Trade Register Name
            </div>
            <div class="result">{{ agent.tradeRegisterNumber }}</div>
         </div>

         <div>
            <div class="label">
               VAT Number
            </div>
            <div class="result">{{ agent.vat }}</div>
         </div>
         <div>
            <div class="label">
               IBAN Number
            </div>
            <div class="result">{{ agent.iban }}</div>
         </div>
         <div>
            <div class="label">
               BIC Code
            </div>
            <div class="result">{{ agent.bicCode }}</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["agent"],
};
</script>
<style lang="scss" scoped>
.card {
   max-width: 450px;
   max-height: 330px;
   width: 50vw;
   height: 50vh;
   padding: 60px 50px;
   border-radius: 8px;
   background: #fff;
   box-shadow: 0px 0px 18px -13px rgba(0, 0, 0, 0.5);
   display: flex;
   flex-direction: column;
   font-size: $fontSizeSM;
   font-weight: 400;
   line-height: 30px;
   hr {
      width: 100%;
      border-top: 1px solid $textColorLight;
      margin: 20px 0;
   }
   .content {
      transform: translateY(-35px);
      .label,
      .result {
         font-size: $fontSizeSM;
         display: inline-flex;
         width: 50%;
      }
      .label {
         font-weight: 300;
      }
      .result {
         font-weight: 400;
      }
      .nature,
      .address {
         line-height: 20px;
      }
      .nature {
         color: $infoColor;
         text-transform: capitalize;
         font-size: $fontSize;
         font-weight: 300;
         margin-bottom: 15px;
      }
   }
}
</style>
