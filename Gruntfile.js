// Função de configuração do Grunt
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compilação do LESS para CSS
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        // Observa mudanças nos arquivos para recompilar automaticamente
        watch: {
            less: {
                files: ['src/styles/**/*.less'], // ** = qualquer subpasta; * = qualquer arquivo dentro da subpasta
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },

        // Substitui os placeholders no HTML com os caminhos corretos para CSS e JS
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        // Minifica o HTML para produção
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },

        // Copia e renomeia o arquivo JavaScript para a pasta dist
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/scripts/',
                        src: ['main.js'],
                        dest: 'dist/scripts/',
                        rename: function (dest, src) {
                            return dest + src.replace('.js', '.min.js'); // Renomeia para main.min.js
                        }
                    }
                ]
            }
        },

        // Limpa a pasta prebuild após a compilação
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }
    });

    // Carregar plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefa padrão que mantém o watch rodando
    grunt.registerTask('default', ['watch']);

    // Tarefa de build para produção
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'copy:dist', 'clean', 'uglify']);
};


