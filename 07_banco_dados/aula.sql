
-----------------------
SELECT * FROM funcionarios 
	JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento
-----------------------
SELECT * FROM funcionarios 
	JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento
 WHERE funcionarios.id_funcionario = 2
 -----------------------
 SELECT 
    departamentos.nome, 
    departamentos.cpf, 
    funcionarios.descricao 
    FROM funcionarios as f
	    JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento
        
        WHERE funcionarios.id_funcionario = 2
-----------------------
 SELECT 
    f.nome, 
    f.cpf, 
    d.descricao 
    FROM funcionarios as f
	    JOIN departamentos as d ON d.id_dept = f.id_departamento
-----------------------
 SELECT 
    f.nome as "Name", 
    f.cpf as "CPF", 
    d.descricao as "Descrição"
    FROM funcionarios as f
	    JOIN departamentos as d ON d.id_dept = f.id_departamento
        
        WHERE f.id_funcionario = 2
-------------------
 SELECT *
    FROM funcionarios as f
	    LEFT OUTER JOIN departamentos as d ON d.id_dept = f.id_departamento
---------------------
 SELECT *
    FROM departamentos as d
	    LEFT OUTER JOIN funcionarios as f ON d.id_dept = f.id_departamento

---------------------
SELECT * FROM aluno ORDER BY responsavel ASC
SELECT * FROM aluno ORDER BY responsavel DESC

---------------------
SELECT * FROM aluno LIMIT 1

---------------------
SELECT * FROM funcionarios LIMIT 4 OFFSET 2

---------------------
SELECT COUNT(nome) FROM funcionarios

---------------------
SELECT id_departamento, COUNT(id_departamento) FROM funcionarios GROUP BY id_departamento

---------------------
SELECT departamentos.descricao, COUNT(id_departamento) FROM funcionarios 
	JOIN departamentos 
   ON departamentos.id_dept = funcionarios.id_departamento
	GROUP BY id_departamento 
	ORDER BY departamentos.descricao ASC

---------------------
SELECT departamentos.descricao, COUNT(funcionarios.id_funcionario) FROM funcionarios
	JOIN departamentos 
    ON funcionarios.id_departamento = departamentos.id_dept
    GROUP BY departamentos.id_dept 
    HAVING COUNT(funcionarios.id_funcionario) >= 2

---------------------
SELECT departamentos.descricao, COUNT(funcionarios.id_funcionario) FROM funcionarios
	JOIN departamentos 
    ON funcionarios.id_departamento = departamentos.id_dept
    GROUP BY departamentos.id_dept 
    HAVING COUNT(funcionarios.id_funcionario) IN (2,4)

---------------------
CREATE TABLE alunos (
  matricola INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  responsavel TEXT
)


CREATE TABLE professores (
  id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  matricola TEXT
)

CREATE TABLE aulas (
  id_professor INTEGER,
  matricola INTEGER
  FOREING KEY(id_professor) REFERENCES professores(id_professor)
  FOREING KEY(matricola) REFERENCES alunos(matricola)
)
---------------------
ALTER TABLE aluno RENAME TO alunos

ALTER TABLE professores RENAME COLUMN matricola TO matricola_id

---------------------
DROP TABLE alunos