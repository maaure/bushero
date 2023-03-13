class Validator:
    def __init__(self):
        self.messages = []
    
    def get_messages(self):
        return self.messages

    def campo_obrigatorio(self, nome_campo):
        self.messages.append("@: Campo Obrigatório".replace("@", nome_campo))

    def validate_not_null_fields(self):
        for attr, val in vars(self).items():
            if(attr in self.not_null_fields):
                if(not val or (type(val) is str and len(val) == 0)):
                    self.campo_obrigatorio(attr)

    def is_valid(self):
        self.validate_not_null_fields()
        return not len(self.messages) > 0

    def get_messages(self):
        return self.messages

class CompainhaValidator(Validator):
    def __init__(self, nome, endereco, contato):
        super().__init__()
        self.nome = nome
        self.endereco = endereco
        self.contato = contato
        self.not_null_fields = ['nome', 'endereco', 'contato']
    
class ViagemValidator(Validator):
    def __init__(self, horario_saida, duracao, classe, valor, origem, destino, compainha, total_assentos):
        super().__init__()
        self.horario_saida = horario_saida
        self.duracao = duracao
        self.classe_id = classe
        self.valor = valor
        self.origem = origem
        self.destino = destino
        self.compainha_id = compainha
        self.total_assentos = total_assentos
        self.not_null_fields = ['horario_saida', 'duracao', 'classe_id', 'valor', 'origem', 'destino', 'compainha_id', 'total_assentos']