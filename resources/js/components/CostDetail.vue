<template>
  <div class="w-full flex flex-col gap-6 mt-4">
    <div class="text-xl text-primary">Cost Detail</div>
    <div class="w-full flex flex-col border">
      <div class="w-full flex bg-secondary py-2">
        <div class="w-2/12 font-semibold px-2">Description</div>
        <div class="w-1/12 font-semibold px-2">Qty</div>
        <div class="w-1/12 font-semibold px-2">UOM</div>
        <div class="w-1/12 font-semibold px-2">Unit Price</div>
        <div class="w-1/12 font-semibold px-2">Discount (%)</div>
        <div class="w-1/12 font-semibold px-2">VAT (%)</div>
        <div class="w-1/12 font-semibold px-2">Currency</div>
        <div class="w-1/12 font-semibold px-2">VAT Amount</div>
        <div class="w-1/12 font-semibold px-2">Sub Total</div>
        <div class="w-1/12 font-semibold px-2">Total</div>
        <div class="w-2/12 font-semibold px-2">Change To</div>
      </div>

      <div class="w-full flex items-center mt-2 px-2">
        <div class="w-2/12">
          <input
            type="text"
            class="w-11/12 bg-light p-2"
            placeholder="Description"
          />
        </div>
        <div class="w-1/12">
          <input
            type="number"
            min="0"
            class="w-10/12 bg-light p-2"
            placeholder="Qty"
          />
        </div>
        <div class="w-1/12">
          <select name="" class="bg-light p-2">
            <option value="">SHP</option>
          </select>
        </div>
        <div class="w-1/12">
          <input
            type="text"
            min="0"
            class="w-10/12 bg-light p-2"
            placeholder="Unit Price"
          />
        </div>
        <div class="w-1/12">
          <input
            type="number"
            min="0"
            class="w-10/12 bg-light p-2"
            placeholder="0"
          />
        </div>
        <div class="w-1/12 flex items-center gap-2 pr-2">
          <input
            type="number"
            min="0"
            class="w-full bg-light p-2"
            placeholder="0"
          />
          <font-awesome-icon
            icon="fa-solid fa-arrow-right-long"
            class="text-secondary"
          />
        </div>
        <div class="w-1/12">
          <select name="" class="w-10/12 bg-light p-2">
            <option value="">USD</option>
          </select>
        </div>
        <div class="w-1/12">0.00</div>
        <div class="w-1/12">0.00</div>
        <div class="w-1/12">0.00</div>
        <div class="w-2/12 flex p-2 gap-2">
          <select name="" class="bg-light p-2">
            <option value="">Select Option</option>
          </select>
          <button class="px-4 bg-secondary text-gray-600">-</button>
        </div>
      </div>

      <div class="w-full flex px-2">
        <div class="w-7/12 flex items-center">
          <div>Exchange Rate 1 USD =</div>
          <div class="p-2 bg-light text-gray-600 mx-2">3.6725</div>
          <div>AED</div>
        </div>
        <div class="w-4/12 flex flex-col bg-secondary">
          <div class="w-full flex items-center px-1 py-2">
            <div class="w-4/12 text-center">AED in Total</div>
            <div class="w-3/12 text-center">0.00</div>
            <div class="w-3/12 text-center">0.00</div>
            <div class="w-3/12 text-center">0.00</div>
          </div>
          <div class="w-full flex items-center px-1 py-2">
            <div class="w-4/12 text-center">USD in Total</div>
            <div class="w-3/12 text-center">0.00</div>
            <div class="w-3/12 text-center">0.00</div>
            <div class="w-3/12 text-center">0.00</div>
          </div>
        </div>
        <div class="w-4/12 flex justify-end py-5 pr-4">
          <button class="px-4 bg-primary text-white">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
