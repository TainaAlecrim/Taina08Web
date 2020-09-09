var cursos = [
    { _id: 1, curso: 'Engenharia da computação', coordenador: 'TAina@ifsp.edu.br' },
    { _id: 2, curso: 'Engenharia Aeroespacial', coordenador: 'Alicesilva@ifsp.edu.br' },
    { _id: 3, curso: 'Astonomia', coordenador: 'messi@ifsp.edu.br' },
    { _id: 4, curso: 'Astrofisica', coordenador: 'cristianoronaldo@ifsp.edu.br' },
]

module.exports = function() {
    var controller = {};
    controller.listaCursos = function(req, res) {
        res.json(cursos);
    };
    controller.obtemCurso = function(req, res) {
        console.log('Selecionou o curso: ' + req.params.id);
        var idCurso = req.params.id;
        var curso = cursos.filter(function(curso) {
            return curso._id == idCurso;
        })[0];
        curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
    };
    return controller;
};