import csv
import json
import sys

def csv_to_json(csv_file_path, json_file_path):
    """
    Converte um arquivo CSV com colunas 'pergunta', 'resposta', 'referencia' para JSON
    
    Args:
        csv_file_path (str): Caminho para o arquivo CSV
        json_file_path (str): Caminho para o arquivo JSON de saída
    """
    try:
        questions = []
        
        with open(csv_file_path, 'r', encoding='utf-8') as csv_file:
            # Detecta automaticamente o delimitador
            sample = csv_file.read(1024)
            csv_file.seek(0)
            sniffer = csv.Sniffer()
            delimiter = sniffer.sniff(sample).delimiter
            
            reader = csv.DictReader(csv_file, delimiter=delimiter)
            
            # Verifica se as colunas necessárias existem
            required_columns = {'pergunta', 'resposta', 'referencia'}
            if not required_columns.issubset(set(reader.fieldnames)):
                print(f"Erro: O CSV deve conter as colunas: {', '.join(required_columns)}")
                print(f"Colunas encontradas: {', '.join(reader.fieldnames)}")
                return False
            
            for row_num, row in enumerate(reader, start=2):  # Start=2 porque linha 1 é o header
                # Remove espaços em branco das chaves e valores
                clean_row = {k.strip(): v.strip() if v else '' for k, v in row.items()}
                
                question_data = {
                    'id': row_num - 1,
                    'pergunta': clean_row['pergunta'],
                    'resposta': clean_row['resposta'],
                    'referencia': clean_row['referencia']
                }
                
                # Só adiciona se a pergunta não estiver vazia
                if question_data['pergunta']:
                    questions.append(question_data)
                else:
                    print(f"Aviso: Pergunta vazia na linha {row_num}, ignorando...")
        
        # Salva o JSON
        with open(json_file_path, 'w', encoding='utf-8') as json_file:
            json.dump(questions, json_file, ensure_ascii=False, indent=2)
        
        print(f"Conversão concluída com sucesso!")
        print(f"Total de perguntas processadas: {len(questions)}")
        print(f"Arquivo JSON salvo em: {json_file_path}")
        return True
        
    except FileNotFoundError:
        print(f"Erro: Arquivo '{csv_file_path}' não encontrado.")
        return False
    except Exception as e:
        print(f"Erro durante a conversão: {str(e)}")
        return False

def main():
    if len(sys.argv) != 3:
        print("Uso: python script.py <arquivo_csv> <arquivo_json>")
        print("Exemplo: python script.py perguntas.csv quiz_data.json")
        sys.exit(1)
    
    csv_file = sys.argv[1]
    json_file = sys.argv[2]
    
    csv_to_json(csv_file, json_file)

if __name__ == "__main__":
    main()

# Exemplo de uso direto no código:
# csv_to_json('perguntas.csv', 'quiz_data.json')