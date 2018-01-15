$(document).ready(function() {
    $('.selectpicker').selectpicker();
    $('.datepicker').datepicker({
        startDate: new Date(),
        autoclose: true, 
        format: 'yyyy/mm/dd'
    });
 });