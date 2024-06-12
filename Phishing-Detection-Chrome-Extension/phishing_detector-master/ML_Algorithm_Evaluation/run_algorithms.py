import time
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
import pandas as pd

def neural_network(dataset, class_labels, test_size):
    data = pd.read_csv(dataset)
    target = pd.read_csv(class_labels)

    X_train, X_test, y_train, y_test = train_test_split(data, target, test_size=test_size, random_state=0)

    mlp = MLPClassifier(hidden_layer_sizes=(30,30,30))
    mlp.fit(X_train, y_train.values.ravel())

    y_predicted = mlp.predict(X_test)

    return y_test, y_predicted

def random_forests(dataset, class_labels, test_size):
    data = pd.read_csv(dataset)
    target = pd.read_csv(class_labels)

    X_train, X_test, y_train, y_test = train_test_split(data, target, test_size=test_size, random_state=0)

    rf = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=0)
    rf.fit(X_train, y_train.values.ravel())

    y_predicted = rf.predict(X_test)

    return y_test, y_predicted

def support_vector_machines(dataset, class_labels, test_size):
    data = pd.read_csv(dataset)
    target = pd.read_csv(class_labels)

    X_train, X_test, y_train, y_test = train_test_split(data, target, test_size=test_size, random_state=0)

    svm = SVC(kernel='linear')
    svm.fit(X_train, y_train.values.ravel())

    y_predicted = svm.predict(X_test)

    return y_test, y_predicted

def calculate_metrics(y_test, y_predicted):
    accuracy = accuracy_score(y_test, y_predicted)
    precision = precision_score(y_test, y_predicted, average='weighted')
    recall = recall_score(y_test, y_predicted, average='weighted')
    f1 = f1_score(y_test, y_predicted, average='weighted')

    print("Accuracy: {:.2f}".format(accuracy))
    print("Precision: {:.2f}".format(precision))
    print("Recall: {:.2f}".format(recall))
    print("F1 score: {:.2f}".format(f1))

def main():
    dataset = "phishing_detector-master\ML_Algorithm_Evaluation\Dataset.csv"
    class_labels = "phishing_detector-master\ML_Algorithm_Evaluation\Target_Labels.csv"
    test_size = 0.3

    print("\nRunning neural networks...")
    start_time = time.time()
    y_test, y_predicted = neural_network(dataset, class_labels, test_size)
    calculate_metrics(y_test, y_predicted)
    end_time = time.time()
    print("Runtime = {:.2f} seconds".format(end_time - start_time))

    print("\nRunning random forests...")
    start_time = time.time()
    y_test, y_predicted = random_forests(dataset, class_labels, test_size)
    calculate_metrics(y_test, y_predicted)
    end_time = time.time()
    print("Runtime = {:.2f} seconds".format(end_time - start_time))

    print("\nRunning support vector machines...")
    start_time = time.time()
    y_test, y_predicted = support_vector_machines(dataset, class_labels, test_size)
    calculate_metrics(y_test, y_predicted)
    end_time = time.time()
    print("Runtime = {:.2f} seconds".format(end_time - start_time))

if __name__ == '__main__':
    start_time = time.time()
    main()
    end_time = time.time()
        
    print("Total runtime = {:.2f} seconds".format(end_time - start_time))

