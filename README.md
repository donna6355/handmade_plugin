#handmade_plugin


1. infinite_slide.js
Each `<li />` MUST have different class or id for image replacement.

			<div id="slides">
				<ul class="slides-container clearfix">
					<li class="banner_1"><a href="#">CJ</a></li>
					<li class="banner_2"><a href="#">부산은행</a></li>
					<li class="banner_3"><a href="#">르노삼성자동차</a></li>
					<li class="banner_4"><a href="#">CGV</a></li>
					<li class="banner_5"><a href="#">롯데시네마</a></li>
					<li class="banner_6"><a href="#">롯데엔터테인먼트</a></li>
					<li class="banner_7"><a href="#">MEGABOX</a></li>
					<li class="banner_8"><a href="#">SHOWBOX</a></li>
				</ul>
			</div>
      
2. typing.js
Each `<p />` has to be set as 'display:none'

        <div class="txtBox">
          <p>Challenging</p>
          <p>Elaborate</p>
          <p>Sense of Humor</p>
        </div>

3. dragEvent.js
`<section />` has to be set as 'position:relative' and `<span.drag />` has to be set as 'position:absolute'

	 <section>
            <span class="drag">You can drag this!</span>
        </section>
