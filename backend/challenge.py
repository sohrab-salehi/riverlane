import random

def get_circuit(length):
    gates = ['X', 'Y', 'Z', 'H', 'S', 'R', 'T']
    indices = random.choices(range(6), k=length)
    circuit = [gates[i] for i in indices]
    circuit.append('M')
    return circuit