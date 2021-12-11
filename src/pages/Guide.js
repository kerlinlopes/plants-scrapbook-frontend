import React from "react";
import CarouselComponent from "../components/carousel";
import { Link } from "react-router-dom";

function Guide() {
  return (
    <div className="CaroComponent">
      <CarouselComponent />
      <h1 className="guide-h1">How to take care of your plants</h1>

      <Link to="/post/1">
        <h2 className="guide-h2">Honeysuckle</h2>
      </Link>
      <h3 className="guide-h3">When, Where and How to Plant</h3>
      <article className="article">
        Climbing honeysuckle is hardy in our region. Purchase plants from a
        local garden center in spring and plant after all danger of frost has
        passed right into early fall. Although climbing honeysuckle will grow
        and flower in part shade, the more sun the vine has, the more flowers
        you’ll get. Plant vines in well-drained, compost-amended soil. Space
        plants 3 to 5 feet apart.
      </article>

      <Link to="/post/22">
        <h2 className="guide-h2">Poppy</h2>
      </Link>
      <h3 className="guide-h3">When, Where and How to Plant</h3>
      <article className="article">
        Sprinkle poppy seeds in spring on garden beds as soon as the ground can
        be worked. Poppies have a taproot and don’t transplant well. Plant in
        full sun on well-drained soil.
      </article>

      <Link to="/post/3">
        <h2 className="guide-h2">Lavender</h2>
      </Link>
      <h3 className="guide-h3">Planting</h3>
      <article className="article">
        Although you can start lavender from seed, it’s easier to purchase
        plants from a local garden center. Lavender grows best in full sun, on
        well-drained, semi-fertile soil. Plant in spring after all danger of
        frost has passed and space plants 1 to 3 feet apart. Once established,
        lavender is drought tolerant.
      </article>

      <Link to="/post/15">
        <h2 className="guide-h2">Geranium</h2>
      </Link>
      <h3 className="guide-h3">Where, When and How to Plant</h3>
      <article className="article">
        Geraniums can be grown from seed, but are slow to germinate and take up
        to 4 months of indoor growing before they can be planted outdoors. It’s
        much easier to purchase favorite varieties from garden centers in spring
        and then propagate and store them for future years. Plant in full to
        part sun in a warm area. Don’t rush to plant geraniums outdoors since
        they love the heat. Wait until you plant other warm season crops, such
        as tomatoes and corn. Plant them in well-drained containers, such as
        clay pots that breathe, allowing the water to drain faster. Geraniums
        don’t grow well in soggy soils.
      </article>

      <Link to="/post/17">
        <h2 className="guide-h2">Pansy</h2>
      </Link>
      <h3 className="guide-h3">Where, When and How to Plant</h3>
      <article className="article">
      While you can start pansies from seed indoors under grow lights 10 to 12 weeks before your last frost date, the seeds are small and germination sometimes problematic. It’s easier to purchase transplants in spring from a local garden center. Plant pansies in well-drained, fertile soil as soon as the ground can be worked in spring, about the time you plant peas. Although they can survive a frost, protect plants from prolonged freezing temperatures with a row cover. Pansies grow best in full to part sun. Space plants 6 to 8 inches apart in beds or containers.
      </article>



    </div>
  );
}

export default Guide;
