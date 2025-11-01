import React from 'react'
import dataapi from "@/dataBase/db.json"

async function GetInfoBlog(props) {

    const { info } = await props.params


    const data = dataapi.blog.find(b => b.id.toString() === info || b.slug === info)
    if (!data) return <div>Blog not found</div>

  return (
    <div>
        <div className='flex mt-10 px-60 '>
            <figure className="">
                <img className='rounded-full w-[100px]' src="/banerrrr.end.png" alt="" />
            </figure>
            <div className='mx-4 '>
                <p className='my-2 text-gray-400'>{data.data}</p>
                <h3 className='text-3xl font-bold'>{data.name}</h3>
            </div>
        </div>
        <div className='mt-10 mx-87'>
            <p>{data.paraghraf}</p>
        </div>
        <figure className='mt-10'>
            <img className='object-cover w-[80%] h-[600px] mx-auto' src={data.img} alt="" />
        </figure>
        <div className='mt-10 mx-87'>
            <p>Mismatched earrings have become a bold and trendy fashion statement, offering endless opportunities for creativity and self-expression. Whether you’re mixing metals, shapes, or styles, there’s no limit to the combinations you can create. In this guide, we’ll explore the art of styling mismatched earrings to elevate your look and showcase your unique personality.</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Embrace Asymmetry:</h3>
            <p>Embrace the beauty of asymmetry by intentionally selecting earrings that differ in size, shape, or design. Pair a small stud with a larger statement earring on the opposite ear for a playful yet balanced look. Mix and match geometric shapes, such as a circle and a triangle, for an edgy and modern vibe.</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Coordinate Colors:</h3>
            <p>Coordinate your mismatched earrings by selecting pieces that share a common color palette. Pair earrings with complementary hues to create a cohesive and harmonious look. Experiment with contrasting colors for a bold and eye-catching effect, such as pairing turquoise with coral or navy with mustard.</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Mix Metals:</h3>
            <p>Don’t be afraid to mix metals when styling mismatched earrings. Combine gold, silver, rose gold, or even brass for a chic and eclectic look. Opt for earrings with mixed metal details or pair a gold earring with a silver counterpart for an effortlessly cool ensemble.</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Play with Textures:</h3>
            <p>Incorporate texture into your mismatched earring combination for added visual interest. Pair smooth, polished earrings with textured or hammered pieces for a dynamic contrast. Experiment with materials like wood, resin, or enamel to add depth and dimension to your look.</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Layering and Stacking:</h3>
            <p>Get creative with layering and stacking mismatched earrings for a curated and eclectic style. Combine multiple earrings on a single ear by stacking studs or hoops of varying sizes. Mix delicate and statement pieces to create a layered effect that draws attention to your ears..</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Consider Your Outfit:</h3>
            <p>Take your outfit into account when styling mismatched earrings to ensure a cohesive overall look. Choose earrings that complement the neckline and color scheme of your clothing. Balance bold statement earrings with simpler outfits, or let your earrings steal the show with a minimalist ensemble.</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Confidence is Key:</h3>
            <p>Above all, wear your mismatched earrings with confidence and flair. Experiment with different combinations until you find a style that feels uniquely you. Remember that fashion is a form of self-expression, so don’t be afraid to push the boundaries and showcase your individuality.</p>
        </div>
        <div className='mt-10 mx-87'>
            <h3 className='text-3xl font-bold mb-5'>Conclusion:</h3>
            <p>Mismatched earrings offer a playful and versatile way to express your personal style. Whether you prefer bold statement pieces or subtle, understated elegance, there’s a mismatched earring combination to suit every taste and occasion. By embracing asymmetry, coordinating colors, mixing metals, playing with textures, layering and stacking, considering your outfit, and, most importantly, wearing them with confidence, you can rock mismatched earrings like a true fashion maven. So go ahead, mix, match, and make a statement with your earrings!</p>
        </div>
    </div>
  )
}

export default GetInfoBlog