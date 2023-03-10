<template>
  <div class="w-full flex flex-col gap-6 mt-4">
    <div class="text-xl text-primary">Cost Detail</div>
    <div class="w-full">
      <table class="w-full table-auto border">
        <thead class="border-b">
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>UOM</th>
            <th>Unit Price</th>
            <th>Discount (%)</th>
            <th>VAT (%)</th>
            <th>Currency</th>
            <th>VAT Amount</th>
            <th>Sub Total</th>
            <th>Total</th>
            <th>Change To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                class="bg-gray-200 p-2"
                placeholder="Description"
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                class="bg-gray-200 p-2"
                placeholder="Qty"
              />
            </td>
            <td>
              <select name="" class="bg-gray-200 p-2">
                <option value="">SHP</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                min="0"
                class="bg-gray-200 p-2"
                placeholder="Unit Price"
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                class="bg-gray-200 p-2"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                class="bg-gray-200 p-2"
                placeholder="0"
              />
            </td>
            <td>
              <select name="" class="bg-gray-200 p-2">
                <option value="">USD</option>
              </select>
            </td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td class="flex">
              <select name="" class="bg-gray-200 p-2">
                <option value="">Select Option</option>
              </select>
              <button class="px-4 bg-secondary text-gray-600">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
