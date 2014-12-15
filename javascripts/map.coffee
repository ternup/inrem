---
---
@data_map =
    'South Gujarat': 'http://caddisfly.cartodb.com/api/v2/viz/c739358a-63f0-11e4-a8de-0e9d821ea90d/viz.json'
    'North Gujarat': 'http://caddisfly.cartodb.com/api/v2/viz/49b6095c-6b26-11e4-8819-0e9d821ea90d/viz.json'
    'Jhabua': 'http://caddisfly.cartodb.com/api/v2/viz/cdf43ca4-841f-11e4-b26a-0e0c41326911/viz.json'
window.onload = ->
    select = document.getElementById "data_select"
    for own k,v of @data_map
        option = document.createElement "option"
        option.value = v
        option.text = k
        select.add option
    
    select.addEventListener "change", () ->
        for wrapper in document.getElementById('map').getElementsByClassName 'cartodb-map-wrapper'
            wrapper.parentNode.remove wrapper
        cartodb.createVis 'map', select.value

    cartodb.createVis 'map', 'http://caddisfly.cartodb.com/api/v2/viz/49b6095c-6b26-11e4-8819-0e9d821ea90d/viz.json'
        .done (vis, layers) ->
            window.map = vis.getNativeMap()
            

