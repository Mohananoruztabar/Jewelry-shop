// app/store/category/[slug]/page.jsx
import Container from '@/component/Container';
import ProductItem from '@/component/ProductItem';
import Paginate from '@/component/Paginate';
import Link from 'next/link';

async function getProductsByCategory(category, page = 1, per_page = 12) {
  const res = await fetch(
    `http://localhost:8000/products?category=${category}&_page=${page}&_per_page=${per_page}`,
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data;
}

export default async function CategoryPage({ params, searchParams }) {
  // اول چک کن slug موجود باشه
  const slug = (await params)?.slug;
  if (!slug) return <div>Category not found</div>;

  const page = searchParams?.page || 1;
  const per_page = searchParams?.per_page || 12;

  // اگر میخوای اول حروف بزرگ باشه برای نمایش
  const normalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();

  const products = await getProductsByCategory(normalizedSlug, page, per_page);
  const items = await products.data || [];
  const pageCount = (await products).pages || 1;

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
