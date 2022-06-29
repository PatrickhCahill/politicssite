# Article.jsx
*Overview:* This is a component which wraps frames.

## snap=true/false
The main purpose of this is to create a snap mechanism which allows for nice transition between frames
*Sample Use:* 
```
<Article>
    <Frame snap=true>       Content</Frame>
    <Frame snap="continue"> Content</Frame>
    <Frame>                 Content</Frame> // We should get snaps up until here, and then
                                            // snaps should turn off
    <Frame snap=false>      Content</Frame> // here.
    <Frame>                 Content</Frame>
    <Frame>                 Content</Frame>

</Article>
```
## colourpalette = ... Todo...