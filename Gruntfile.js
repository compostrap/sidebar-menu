module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {'dist/css/sidebar.css': ['scss/sidebar.scss']}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('grunt-sass', ['sass']);
};
