<template>
  <div class="w-full flex">
    <div class="w-2/12 flex">
      <div class="w-full flex flex-col">
        <div
          class="w-full flex justify-between items-center p-2 bg-secondary rounded-md"
        >
          <font-awesome-icon icon="fa-solid fa-truck" class="text-primary" />
          Logistic Instruction
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            class="text-gray-600"
          />
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col px-3">
      <div class="w-full flex border-b px-3 pb-2 mb-2">
        <div class="px-12 py-1 rounded-full bg-secondary">Draft</div>
      </div>
      <div class="w-full flex">
        <div class="w-9/12 flex flex-col border-r border-dotted">
          <div class="flex px-3 gap-3">
            <div class="w-4/12 flex flex-col">
              <div>Assigned Vendor</div>
              <div class="w-full">
                <select
                  class="w-full bg-light p-2 rounded-md border"
                  @change="selectVendor($event)"
                >
                  <option value="">Choose Vendor</option>
                  <option
                    :value="vendor.id"
                    v-for="(vendor, index) of vendors"
                    :key="index"
                  >
                    {{ vendor.assigned }}
                  </option>
                </select>
              </div>
            </div>
            <div class="w-3/12 flex flex-col">
              <div>Attention Of</div>
              <div class="w-full">
                <input
                  type="text"
                  class="w-full bg-light p-2 rounded-md border"
                  placeholder="Attention Name"
                  v-model="attn"
                  disabled
                />
              </div>
            </div>
            <div class="w-3/12 flex flex-col">
              <div>Quotation No.</div>
              <div class="w-full">
                <input
                  type="text"
                  class="w-full bg-light p-2 rounded-md border"
                  placeholder="Quotation No."
                  v-model="quotation_no"
                  disabled
                />
              </div>
            </div>
            <div class="w-3/12 flex flex-col">
              <div>Invoice To</div>
              <div class="w-full">
                <select name="" class="w-full bg-light p-2 rounded-md border">
                  <option value="">Choose Invoice</option>
                  <option
                    :value="invoice"
                    v-for="(invoice, index) of invoices"
                    :key="index"
                  >
                    {{ invoice }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="w-full px-3">
            <div>Vendor Address</div>
            <div class="w-full">
              <input
                type="text"
                class="w-full bg-light p-2 rounded-md border"
                placeholder="Vendor Address"
                v-model="address"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="w-3/12 flex flex-col px-3 gap-3">
          <div class="w-full flex flex-col">
            <div>Customer Contact</div>
            <div class="w-full">
              <select
                class="w-full bg-light p-2 rounded-md border"
                @change="selectCustomer($event)"
              >
                <option value="">Choose Customer</option>
                <option
                  :value="customer.id"
                  v-for="(customer, index) of customers"
                  :key="index"
                >
                  {{ customer.contact }}
                </option>
              </select>
            </div>
          </div>
          <div class="w-full flex flex-col">
            <div>Customer PO No.</div>
            <div class="w-full">
              <select name="" class="w-full bg-light p-2 rounded-md border">
                <option value="">Choose PO Number</option>
                <option
                  :value="po_number"
                  v-for="(po_number, index) of po_numbers"
                  :key="index"
                >
                  {{ po_number }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorDetail",
  data() {
    return {
      attn: "",
      quotation_no: "",
      address: "",
      po_numbers: [],
    };
  },
  computed: {
    vendors() {
      return this.$store.getters.getterVendors;
    },
    invoices() {
      return this.$store.getters.getterInvoices;
    },
    customers() {
      return this.$store.getters.getterCustomers;
    },
  },
  created() {
    this.getVendors();
    this.getInvoices();
    this.getCustomers();
  },
  methods: {
    getInvoices() {
      this.$store.dispatch("getInvoices");
    },
    getVendors() {
      this.$store.dispatch("getVendors");
    },
    getCustomers() {
      this.$store.dispatch("getCustomers");
    },
    selectVendor(event) {
      const vendor = this.vendors.find(
        (vendor) => vendor.id === event.target.value
      );

      if (vendor) {
        this.attn = vendor.attn;
        this.quotation_no = vendor.quotation_no;
        this.address = vendor.address;
      } else {
        this.attn = "";
        this.quotation_no = "";
        this.address = "";
      }
    },
    selectCustomer(event) {
      const customer = this.customers.find(
        (customer) => customer.id === event.target.value
      );

      this.po_numbers = customer ? customer.po_numbers : [];
    },
  },
};
</script>
