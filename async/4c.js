// imagine error handling async, and this locks the browser:

try {
    var story = getJSONSync('story.json');
    addHtmlToPage(story.heading);

    story.chapterUrls.forEach(function (chapterUrl) {
        var chapter = getJSONSync(chapterUrl);
        addHtmlToPage(chapter.html);
    });

    addTextToPage("All done");
} catch (err) {
    addTextToPage("Argh, broken: " + err.message);
}

document.querySelector('.spinner').style.display = 'none';