import styled from "styled-components";
const SliderDiv = styled.div`
  width: 100%;
  background-color: floralwhite;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  object-position: top;
  height: 300px;
  display: block;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

const Slider = styled.div`
  display: flex;
  aspect-ratio: 16/9;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
  width: 100%;
  height: 250px;
  @media (min-width: 768px) {
    height: 350px;
  }
`;
const DivNav = styled.div`
  display: flex;
  column-gap: 1rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;
const AHrefSlider = styled.a`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.75;
  transition: opacity ease 250ms;
`;
export function SliderImg() {
  return (
    <SliderDiv>
      <div>
        <Img
          id="imgSlider-1"
          src="https://res.cloudinary.com/apxschool/image/upload/v1676112920/D_NQ_896432-MLA53607208617_022023-OO_pzr3vf.webp"
          alt=""
        />
      </div>
    </SliderDiv>
  );
}
/* <div style={{ position: "relative", margin: "0 auto" }}>
        <Slider>
          <Img
            id="imgSlider-1"
            src="https://res.cloudinary.com/apxschool/image/upload/v1676112920/D_NQ_896432-MLA53607208617_022023-OO_pzr3vf.webp"
            alt=""
          />
          <Img
            id="imgSlider-2"
            src="https://res.cloudinary.com/apxschool/image/upload/v1676043739/image22_cvrqv0.jpg"
            alt=""
          />
          <Img
            src="https://res.cloudinary.com/apxschool/image/upload/v1676043313/16303836_pf-s73-eve-set-14-mockup-min_ujva4p.jpg"
            alt=""
            id="imgSlider-3"
          />
        </Slider>
        <DivNav>
          <AHrefSlider href="#imgSlider-1" />
          <AHrefSlider href="#imgSlider-2" />
          <AHrefSlider href="#imgSlider-3" />
        </DivNav>
      </div>*/
