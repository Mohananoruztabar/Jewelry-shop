// app/store/category/[slug]/page.jsx
import Container from '@/component/Container';
import ProductItem from '@/component/ProductItem';
import Paginate from '@/component/Paginate';
import Link from 'next/link';
import dataapi from "@/dataBase/db.json"

async function getProductsByCategory(category, page = 1, per_page = 12) {
  const filtered = dataapi.products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  const startIndex = (page - 1) * per_page;
  const paginated = filtered.slice(startIndex, startIndex + per_page);

  return {
    data: paginated,
    pages: Math.ceil(filtered.length / per_page)
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const slug = (await params)?.slug;
  if (!slug) return <div>Category not found</div>;

  const page = searchParams?.page || 1;
  const per_page = searchParams?.per_page || 12;

  const normalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();

  const products = await getProductsByCategory(normalizedSlug, page, per_page);
  const items = await products.data || [];
  const pageCount =  products.pages || 1;

  return (
    <Container>
      <h2 className="text-4xl font-bold text-center mt-12">{normalizedSlug}</h2>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {items.map(product => (
          <Link key={product.id} href={`/store/product/${product.id}`}>
            <ProductItem {...product} />
          </Link>
        ))}
      </div>
      <Paginate pageCount={pageCount} />
    </Container>
  );
}
