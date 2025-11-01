import Container from '@/component/Container'
import React from 'react'
import AccordionMenu from '@/component/AccordionMenu'
import ButtonItem from '@/component/ButtonItem'
import ButtonsAddcard from '@/component/ButtonsAddcard'

async function GetProduct(props) {

    const { id } = await props.params

    const result = await fetch(`http://localhost:8000/products/${id}`)
    const data = await result.json()


  return (
    <div>
        <Container>
            <div className='grid grid-cols-3 gap-8 mt-20'>
                <figure className='border border-trans'>
                    <img className='h-[440px]' src={data.imd} alt="" />
                </figure>
                <div className=''>
                    <h3 className='text1 font-bold'>{data.name}</h3>
                    <h6 className='pt-5'>Categori :<span>{data.category}</span></h6>
                    <h4 className='pt-5 font-bold'>{(data.price).toFixed(2)}<span>$</span></h4>
                    <ButtonItem  id={data.id}/>
                    <ButtonsAddcard  id={data.id}/>
                </div>
                <div className=''>
                    <AccordionMenu {...data} />
                </div>
            </div>
            <span className='border border-trans mt-20 block'></span>
            <div className='mt-15'>
                <h3 className='text1'>Description</h3>
                <p className='mt-3'>Radiating warmth and elegance, this 9CT yellow gold ring serves as a tangible symbol of devotion, featuring the heartfelt sentiment “I Love You” inscribed with exquisite detail. Fashioned from lustrous 9-carat yellow gold, this ring encapsulates the essence of love with its endearing inscription, “I Love You”, making it a cherished token of affection.</p>
                <p className='mt-3'>This captivating ring, rendered in 9CT yellow gold, captures the essence of romance with its delicate engraving, spelling out the profound declaration “I Love You”, expressing love in a timeless and elegant manner.</p>
            </div>
        </Container>
    </div>
  )
}

export default GetProduct