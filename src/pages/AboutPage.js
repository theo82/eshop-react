import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our title</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quam at atque dicta impedit dolorum numquam accusantium dolorem
            veritatis eaque cumque officiis, ratione, modi itaque est distinctio
            blanditiis? Laboriosam, obcaecati id aperiam necessitatibus autem
            quo non reiciendis maxime officiis nesciunt aliquam quia provident
            iste dolores repellendus veritatis perspiciatis explicabo pariatur
            in officia quam quis dolor. Omnis excepturi possimus, voluptas nobis
            in quasi quos quibusdam distinctio dicta cum officiis doloribus,
            assumenda quisquam, quam harum sint quo expedita voluptatibus non
            sunt architecto veniam blanditiis corporis. Dignissimos quaerat
            neque reiciendis hic distinctio, alias, eum saepe quasi eligendi
            maiores nulla quos! Nesciunt, velit. Delectus.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
