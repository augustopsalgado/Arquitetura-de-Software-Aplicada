import json
import re
import logging
import datetime
import numpy as np

# from Aviao import Aviao
# from Aeroporto import Aeroporto

class Voo:
    #construtor
    def __init__(self, idVoo=None, idAviao=None, lugaresDisponiveis=None, dataDeSaida=None, idAeroportoSaida=None, dataDeChegada=None, idAeroportoChegada=None, preco=None):
        try:
            self.idVoo = idVoo

            self.idAviao = idAviao
            self.lugaresDisponiveis = lugaresDisponiveis

            self.dataDeSaida = dataDeSaida
            self.idAeroportoSaida = idAeroportoSaida
            
            self.dataDeChegada = dataDeChegada
            self.idAeroportoChegada = idAeroportoChegada
            
            self.preco = preco
        except Exception as e:
            logging.info(f'{e}')
            print(e)
            self = None

        logging.info('DADOS DE Voo DENTRO DOS PADROES!!')

    def __iter__(self): #cria dicionario
        yield from{
            "idVoo": self.idVoo,
            "idAviao": self.idAviao,
            "dataDeSaida": self.dataDeSaida,
            "idAeroportoSaida": self.idAeroportoSaida,
            "dataDeChegada": self.dataDeChegada,
            "idAeroportoChegada": self.idAeroportoChegada,
            "preco": self.preco
        }.items()
    
    #envia uma estrutura em formato de dicionário (dict interage com o método iter)
    def __str__(self):
        return json.dumps(dict(self), ensure_ascii = False)
    
    #usado no momento que dou o print
    def __repr__(self):
        return 'Voo: %s\nidAviao: %s\ndataDeSaida: %s\nidAeroportoSaida: %s\ndataDeChegada: %s\nidAeroportoSaida: %s\nPreco: %s\n' % (self.getId(),self.getIdAviao(), self.getDataDeSaida(), self.getIdAeroportoSaida(), self.getDataDeChegada(), self.getIdAeroportoSaida(), self.getPreco())
    
    def printa(self):
        print(self.__repr__())

    # def from_json(json_file):
    #     return Voo(json.load(dict(json_file), ensure_ascii = False))

    def to_json(self):
        return self.__str__()


    #VALIDACOES
    # GETTERS AND SETTERS

    def setId(self,idVoo):
        self.idVoo = idVoo
    
    def getId(self):
        return self.idVoo

    def setIdAviao(self,idAviao):
        self.idAviao = idAviao
    
    def getIdAviao(self):
        return self.idAviao
            
    def setQtLugaresDisponiveis(self, lugaresDisponiveis):
        self.lugaresDisponiveis = lugaresDisponiveis
    
    def getQtLugaresDisponiveis(self):
        return self.lugaresDisponiveis

    def setDataDeSaida(self,dataDeSaida):
        self.dataDeSaida = dataDeSaida
    
    def getDataDeSaida(self):
        return self.dataDeSaida
            
    def setIdAeroportoSaida(self, idAeroportoSaida):
        self.idAeroportoSaida = idAeroportoSaida
    
    def getIdAeroportoSaida(self):
        return self.idAeroportoSaida

    def setDataDeChegada(self,dataDeChegada):
        self.dataDeChegada = dataDeChegada
    
    def getDataDeChegada(self):
        return self.dataDeSaida
            
    def setIdAeroportoSaida(self, idAeroportoSaida):
        self.idAeroportoSaida = idAeroportoSaida
    
    def getIdAeroportoSaida(self):
        return self.idAeroportoSaida
            
    def setPreco(self, preco):
        self.preco = preco
    
    def getPreco(self):
        return self.preco

''' aeroporto1 = Aeroporto(idAeroporto="1", nome = "garulhos", pais="Brasil", cidade="Sao Paulo")
print(aeroporto1.__repr__())
aeroporto2 = Aeroporto(idAeroporto="2", nome = "base interespacial", pais="Brasil", cidade="Sao Jorge")
print(aeroporto2.__repr__())
aviao = Aviao(idAviao="1", qtAssentosEconomicos=3, qtAssentosExecutivos=5)
print(aviao.__repr__())

user = Voo(idVoo=1, idAviao=aviao.getIdAviao(), dataDeSaida="12-03-2023", idAeroportoSaida=aeroporto1.getIdAeroporto(), dataDeChegada="21-03-2023", idAeroportoChegada=aeroporto2.getIdAeroporto())
print(user.__repr__()) '''