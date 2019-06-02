<div id="fruitgrid">
    <div class="row">
        <img src="{{ URL::asset('img/fruits/ananas.jpg') }}">
        <img src="{{ URL::asset('img/fruits/bananes.jpg') }}">
        <img src="{{ URL::asset('img/fruits/bleuets.jpg') }}">
        <img src="{{ URL::asset('img/fruits/cerises.jpg') }}">
        <img src="{{ URL::asset('img/fruits/fraises.jpg') }}">
        <img src="{{ URL::asset('img/fruits/framboises.jpg') }}">
    </div>
    <div class="row">
        <img src="{{ URL::asset('img/fruits/mures.jpg') }}">
        <img src="{{ URL::asset('img/fruits/peches.jpg') }}">
        <img src="{{ URL::asset('img/fruits/pommes.jpg') }}">
        <img src="{{ URL::asset('img/fruits/rhubarbes.jpg') }}">
        <img src="{{ URL::asset('img/fruits/kiwis.jpg') }}">
        <img src="{{ URL::asset('img/fruits/mangues.jpg') }}">
    </div>
</div>

<style>
    #fruitgrid .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create two equal columns that sits next to each other */
    #fruitgrid .column {
        flex: 50%;
        padding: 0 4px;
    }

    #fruitgrid img {
        margin-top: 6px;
        margin-left: 6px;
        vertical-align: middle;
        width: 85px;
        height: 85px;
    }
</style>