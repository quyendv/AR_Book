function ProductItem() {
  return (
    <div className="w-full group cursor-pointer hover:shadow-productItem hover:rounded-lg transition">
      {/* Image product */}
      <div className="h-0 bg-[url('/src/assets/images/product-item1.png')] bg-cover bg-center bg-no-repeat pb-[100%]"></div>
      {/* Desc */}
      <p className="text-center text-base text-white group-hover:text-primary">Product 1</p>
    </div>
  );
}

export default ProductItem;
