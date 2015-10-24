
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Song', '# of times sampled',],
        ['Change The Beat',1963 ],
        ['Amen, Brother', 1825],
        ['Think (about it)', 1306],
        ['Funky Drummer', 1114],
        ['La Di Da Di', 721 ],
        ['Funky President', 638],
        ['Bring The Noise', 610],
        ['Impeach The President', 606],
        ['Synthetic Substitution', 592],
        ['Here We Go', 571],
        ['Long Red', 508],
        ['The Champ', 481],
        ['UFO', 413],
        ['Its A New Day', 409],
        ['Apache', 368]

    ]);

    var options = {
        title: 'Most Sampled Songs In History',

        chartArea: {width: '50%', height: '3000%'},

        hAxis: {

            title: '# of times sampled',
            minValue: 0
        },
        vAxis: {
            title: 'Song'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}


/////////////////////////////////////////////////////////////////////////

google.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Album', '# Of Albums Sold'],
        ['Thriller', 110000000],
        ['Back In Black', 49000000],
        ['Dark Side Of The Moon', 45000000],
        ['The Bodyguard', 44000000],
        ['Bat Out Of Hell', 43000000]
    ]);

    var options = {
        width: 900,
        chart: {
            title: 'Top 5 Best Selling Albums Of All Time'

        },
        series: {
            0: { axis: 'distance' },
            1: { axis: 'brightness' }
        },
        axes: {
            y: {
                distance: {label: '# Of Albums Sold'},
                brightness: {side: 'right', label: 'apparent magnitude'}
            }
        }
    };

    var chart = new google.charts.Bar(document.getElementById('dual_y_div'));
    chart.draw(data, options);
}
