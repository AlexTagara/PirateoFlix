$(document).ready(function() {
    $('.miniatura').click(function() {
        var titulo = $(this).data('titulo');
        var descripcion = $(this).data('descripcion');
        var duracion = $(this).data('duracion');
        var imagenSrc = $(this).find('img').attr('src');

        $('#modImg').attr('src', imagenSrc);
        $('#modTtl').text(titulo);
        $('#modDesc').text(descripcion);
        $('#modDur').text(duracion);
        $('#modInfo').modal('show');
    });
});