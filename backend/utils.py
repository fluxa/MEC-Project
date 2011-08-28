def crumbsFromPath(path):

    crumbs = '<ul id="crumbs">'
    
    a = path.split('/')
    p = '/'
    l = len(a)
    c = 0
    
    for link in a:
        if link.find('.') >= 0:
            link = link[0:link.find('.')]
        p += link + '/'
        
        if (c+1) == l:
            crumbs += '<li>'+link+'</li>'
        else:
            crumbs += '<li><a href="'+p+'">'+link+'</a></li>'
        
        c += 1

    crumbs += '</ul>'
    return crumbs