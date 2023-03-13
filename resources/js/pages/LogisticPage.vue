<template>
  <div class="w-full flex flex-col gap-6 px-10">
    <h1 class="mt-3 mb-6">3rd Party Instruction</h1>
    <VendorDetail />
    <CostDetail />
    <ActionForm />
  </div>
</template>

<script setup>
import VendorDetail from "../components/VendorDetail.vue";
import CostDetail from "../components/CostDetail.vue";
import ActionForm from "../components/ActionForm.vue";
</script>
