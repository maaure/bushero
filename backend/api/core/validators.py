class EmpresaValidator:
    def __init__(self, nome, endereco, contato):
        self.nome = nome
        self.endereco = endereco
        self.contato = contato
        self.messages = []
    
    def is_valid(self):
        if not self.nome:
            self.messages.append("Nome: Campo Obrigatório")
            
        if not self.endereco:
            self.messages.append("Endereco: Campo Obrigatório")
            
        if not self.contato:
            self.messages.append("Contato: Campo Obrigatório")

        return not len(self.messages) > 0
    
    def get_messages(self):
        return self.messages
