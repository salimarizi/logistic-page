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
                <select name="" class="w-full bg-light p-2 rounded-md border">
                  <option value="">Amarit & Associated Logistics Co Ltd</option>
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
                />
              </div>
            </div>
            <div class="w-3/12 flex flex-col">
              <div>Quotation No.</div>
              <div class="w-full">
                <input
                  type="text"
                  class="w-full bg-light p-2 rounded-md border"
                  placeholder="Attention Name"
                />
              </div>
            </div>
            <div class="w-3/12 flex flex-col">
              <div>Invoice To</div>
              <div class="w-full">
                <input
                  type="text"
                  class="w-full bg-light p-2 rounded-md border"
                  placeholder="Attention Name"
                />
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
              />
            </div>
          </div>
        </div>
        <div class="w-3/12 flex flex-col px-3 gap-3">
          <div class="w-full flex flex-col">
            <div>Customer Contact</div>
            <div class="w-full">
              <select name="" class="w-full bg-light p-2 rounded-md border">
                <option value="">ADNOC-ONSHORE</option>
              </select>
            </div>
          </div>
          <div class="w-full flex flex-col">
            <div>Customer PO No.</div>
            <div class="w-full">
              <select name="" class="w-full bg-light p-2 rounded-md border">
                <option value="">A123XXHTA0192</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
