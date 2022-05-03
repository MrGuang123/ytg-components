const shell = require('shelljs')

shell.cp('-R', 'src/components/', 'package');
shell.cp('-R', 'plugin/', 'package');
shell.cd('package')

// 读取外部的package.json依赖放到packages文件夹下package。JSON中的peer中

if (shell.exec('npm publish').code !== 0) {
    shell.echo('Error: Git published failed')
    shell.exit(1)
} else {
    console.log('published success!')
}