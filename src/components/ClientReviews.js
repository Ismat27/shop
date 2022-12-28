import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import { reviews } from '../data/reviews'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

const tempText = 'This is so far the best website for my online shopping. They keep to time and you can monitor your goods anytime, anyday till it gets to your doorstep. Did I mention they offer 24/7 customer services? It is simply the best out there.'

const reviewsNo = reviews.length
const ReviewCard = ({text, name, rating, image, index, view}) => {

    const style = {
        left: `0`,
        translate: `transformX()`
    }
    return (
        <div className={`${view === index ? 'review active': 'review'}`} >
            <div className='review-content'>
                <p className='review-text'>
                    {text || tempText}
                </p>
                <img src={image || 'https://via.placeholder.com/104'} alt={name} />
                <h3 className='reviewer-name capitalize'>{name|| 'anonymous'}</h3>
                <p className='star-rate'>
                    <span className='star'>
                        <FaStar />
                    </span>
                    <span>{rating}</span>
                </p>

            </div>
        </div>
    )
}

const ClientReviews = () => {

    const [view, setView] = useState(0)

    useEffect(() => {
        const sliderChangeId = setInterval(nextView, 5000)

        return () => clearInterval(sliderChangeId)
    }, [view])

    const changeView = index => {
        setView(index)
    }

    const prevView = () => {
        let prev = view - 1
        if (prev < 0) {
            prev = reviewsNo - 1
        }
        setView(prev)
    }
    const nextView = () => {
        let next = view + 1
        if (next > reviewsNo - 1) {
            next = 0
        }
        setView(next)
    }

    return (
        <Wrapper>
            <h2 className='capitalize section-title'>Clients Review</h2>
            <div className='reviews'>
                {
                    reviews.map((reviewData, index) => {
                        return (
                            <ReviewCard key={reviewData.id} view={view} index={index} {...reviewData} />
                        )
                    })
                }
                <span className='slide-nav prev' role={'button'} onClick={prevView}>
                    <MdNavigateBefore />
                </span>
                <span className='slide-nav next' role={'button'} onClick={nextView}>
                    <MdNavigateNext />
                </span>
                <div className='inds'>
                    {
                        reviews.map((_, index) => {
                            return (
                                <span
                                    role={'button'}
                                    className={`${index === view? 'ind active' : 'ind'}`}
                                    key={index}
                                    onClick={() => changeView(index)}
                                >

                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
text-align: center;
margin-top: 4rem;
.section-title {
    margin-bottom: 3rem;
    font-weight: 600;
}
.reviews {
    position: relative;
    overflow: hidden;
    height: 400px;
}
.star svg {
    color: #F6CA2E;
}
.review {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    opacity: 0;
}
.review.active {
    opacity: 1;
}
.review-content {
    max-width: 620px;
    margin: auto;
}
.review-text {
    font-style: italic;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 32px;
    color: var(--grey-one);
}
.reviewer-name {
    font-size: 1rem;
    margin-block: .5rem;
}
.star-rate, .inds {
    display: flex;
    gap: .5rem;
    justify-content: center;
}
.slide-nav {
    position: absolute;
    top: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    background: var(--white);
    border: 2px solid #F4F8FE;
    translate: transformY(-50%);
    svg {
        color: var(--black);
        font-size: 16px;

    }
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
.prev {
    left: 0;
}
.next {
    right: 0;
}
.inds {
    position: absolute;
    bottom: 0px;
    width: 100%;
    gap: 1rem;
}
.ind {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--icon-color);
    transition: all 0.5s ease-in-out;
}
.ind.active {
    background-color: var(--btn-primary-bg);
}
@media (min-width: 576px) {
    .reviews {
        height: 300px;
    }
}
@media (min-width: 768px) {
    
}
@media (min-width: 992px) {
    .reviews {
        height: 300px;
    }
}
`

export default ClientReviews
